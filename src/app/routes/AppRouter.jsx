import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import { initialize as initGoogleAnalytics } from 'react-ga';

import AppRoutes from './Routes';

class AppRouter extends Component {
  constructor() {
    super();
    initGoogleAnalytics('');
  }

  render() {
    return (
      <Fragment>
        <Switch>
          {AppRoutes.map((route, index) => (
            <Route key={index} {...route} />
          ))}
        </Switch>
      </Fragment>
    );
  }
}

export default AppRouter;
