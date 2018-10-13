/**
 * React required imports.
 */
import React from 'react';
import Loadable from 'react-loadable';
import { Redirect } from 'react-router-dom';

const Loading = () => <div>Loading...</div>;

/**
 * Application route map.
 * Pages are split into bundles for better performances
 * using 'react-loadable' library.
 */
export default [
  {
    path: '/',
    exact: true,
    component: Loadable({
      loader: () =>
        import(/* webpackChunkName: "js/chunks/home-page" */
        '../pages/Home'),
      loading: Loading,
    }),
  },
  {
    path: '/index',
    exact: true,
    component: () => <Redirect to="/" />,
  },
  {
    path: '/about',
    exact: true,
    component: Loadable({
      loader: () =>
        import(/* webpackChunkName: "js/chunks/about-page" */
        '../pages/About'),
      loading: Loading,
    }),
  },
  {
    path: '**',
    component: Loadable({
      loader: () =>
        import(/* webpackChunkName: "js/chunks/notfound-page" */
        '../pages/NotFound'),
      loading: Loading,
    }),
  },
];
