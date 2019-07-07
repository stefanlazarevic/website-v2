import { hot } from 'react-hot-loader/root';
import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import AppRouter from '@routes/Router';
import { Reboot, Drawer } from '@components';
import { LightTheme } from '@design';

const AppRoot = () => (
  <ThemeProvider theme={LightTheme}>
    <Fragment>
      <Reboot />

      <Drawer />
      <AppRouter />
    </Fragment>
  </ThemeProvider>
);

export default hot(AppRoot);
