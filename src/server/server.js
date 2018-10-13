import dotenv from 'dotenv';

/**
 * Node import group.
 */
import express from 'express';
import fs from 'fs';
import compression from 'compression';
import bodyParser from 'body-parser';
import 'isomorphic-fetch';
import serialize from 'serialize-javascript';
import minifyCssString from 'minify-css-string';

/**
 * React import group.
 */
import React from 'react';
import Helmet from 'react-helmet';
import { StaticRouter, matchPath } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import Loadable from 'react-loadable';
import { getBundles } from 'react-loadable/webpack';

/**
 * Redux import group.
 */
import { Provider as ReduxProvider } from 'react-redux';
import createStore from '../app/redux/store/global.store';

/**
 * Application import group.
 */
import AppRoutes from '../app/routes/Routes';
import stats from '../../build/public/react-loadable.json';
import App from '../app/App';

import { ServerStyleSheet } from 'styled-components';

/**
 * Prepare HTML Template.
 */
const templateHTML = fs.readFileSync('build/index.html', 'utf8');

/**
 * Load all configuration variables.
 */
dotenv.config();

const IS_PRODUCTION = process.env.NODE_ENV === 'production';

/**
 * Create express application.
 */
const app = express();
app.use(bodyParser.json());
app.use(compression({ level: process.env.COMPRESSION_LEVEL || 6 }));

const cacheStaticAssets = IS_PRODUCTION
  ? {
      maxage: '31557600h',
    }
  : {};

app.use(express.static('build/public', cacheStaticAssets));

/**
 * Handle incoming requests.
 */
app.get('*', (request, response, next) => {
  /**
   * Initial response status.
   * 200 = OK.
   */
  let status = 200;

  /**
   * Determine which component should be loaded for current request.
   */
  const activeRoute = AppRoutes.find(route =>
    matchPath(request.url.toLowerCase(), route)
  );

  /**
   * Extract information from activeRoute.
   */
  if (activeRoute) {
    const { path } = activeRoute;

    if (path === '**') {
      status = 404;
    }
  } else {
    status = 404;
  }

  const context = {};
  const store = createStore();

  const loadedComponents = Promise.all(
    AppRoutes.filter(route => matchPath(request.url.toLowerCase(), route))
      .filter(route => route.component.preload)
      .map(route => route.component.preload())
  );

  loadedComponents.then(components => {
    const FType = '[object Function]';
    const AType = '[object Array]';

    const componentsPromise = components
      .map(loadableComponent => loadableComponent.default)
      .filter(pageComponent => {
        const SFT = Object.prototype.toString.apply(
          pageComponent.serverFetchInitialData
        );
        return (
          pageComponent.serverFetchInitialData &&
          (SFT === FType || SFT === AType)
        );
      })
      .map(pageComponent => {
        const SFT = Object.prototype.toString.apply(
          pageComponent.serverFetchInitialData
        );

        if (SFT === FType) {
          return store.dispatch(pageComponent.serverFetchInitialData());
        } else {
          // Handle array of actions.
          return Promise.all(
            pageComponent.serverFetchInitialData
              .filter(action => typeof action === 'function')
              .map(action => store.dispatch(action()))
          );
        }
      });

    Promise.all(componentsPromise)
      .then(() => {
        const modules = [];

        const sheet = new ServerStyleSheet();

        const jsx = (
          <Loadable.Capture report={moduleName => modules.push(moduleName)}>
            <ReduxProvider store={store}>
              <StaticRouter context={context} location={request.url}>
                <App />
              </StaticRouter>
            </ReduxProvider>
          </Loadable.Capture>
        );

        const reduxState = store.getState();

        const body = renderToString(sheet.collectStyles(jsx));

        const styleTags = sheet.getStyleTags();

        const bundles = getBundles(stats, modules);

        if (context.url) {
          return response.redirect(302, context.url);
        }

        /**
         * Extract page data from React Helmet.
         */
        const helmet = Helmet.renderStatic();
        const pageTitle = helmet.title.toString();
        const seoMetadata = helmet.meta.toString();

        Helmet.rewind();

        /**
         * Extract used chunks to render page from react-loadable library.
         * [IMPORTANT] Use defer in order to load chunk last and prevent undefined webpackJsonp issue.
         */
        const bundleScripts = bundles
          .map(bundle => `<script src="${bundle.publicPath}"></script>`)
          .join('');

        const responseHTML = templateHTML
          .replace('{{TITLE}}', pageTitle)
          .replace('{{SEO_CRITICAL_METADATA}}', seoMetadata)
          .replace('{{CRITICAL_CSS}}', minifyCssString(styleTags))
          .replace('{{APP}}', body)
          .replace('{{LOADABLE_CHUNKS}}', bundleScripts)
          .replace('{{REDUX_DATA}}', serialize(reduxState));

        if (process.env.NODE_ENV === 'production') {
          response.set('Cache-Control', 'public, max-age=31557600h');
        }
        response.status(status).send(responseHTML);
      })
      .catch(next);
  });
});

/*
 * Preload all loadable components.
 * Expose server on port 3000.
 */
const PORT = process.env.HTTP_PORT || 80;

Loadable.preloadAll().then(() => {
  app.listen(PORT, () => {
    console.info(`HTTP Server is listening @ port ${PORT}`);
  });
});
