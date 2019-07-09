import { hot } from 'react-hot-loader/root';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import AppRouter from '@routes/Router';
import { Drawer, BurgerButton, Reboot } from '@components';
import { DarkTheme } from '@design';
import {
  Provider as DrawerContextProvider,
  Consumer as DrawerContextConsumer,
} from '@context/DrawerContext';

const AppRoot = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <React.Fragment>
        <Reboot />
        <DrawerContextProvider active={false}>
          <DrawerContextConsumer>
            {context => (
              <React.Fragment>
                <BurgerButton
                  active={context.active}
                  onClick={context.toggle}
                />
                <Drawer
                  open={context.active}
                  afterClose={context.deactivate}
                  afterOpen={context.activate}
                />
              </React.Fragment>
            )}
          </DrawerContextConsumer>
          <AppRouter />
        </DrawerContextProvider>
      </React.Fragment>
    </ThemeProvider>
  );
};

export default hot(AppRoot);
