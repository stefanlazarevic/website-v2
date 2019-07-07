import { hot } from 'react-hot-loader/root';
import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import AppRouter from '@routes/Router';
import { Reboot } from '@components';
import { DarkTheme } from '@design';

const AppRoot = () => (
  <ThemeProvider theme={DarkTheme}>
    <Fragment>
      <Reboot />
      <AppRouter />
    </Fragment>
  </ThemeProvider>
);

export default hot(AppRoot);
