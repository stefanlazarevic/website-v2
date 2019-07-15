import { hot } from 'react-hot-loader/root';
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import AppRouter from '@routes/Router';
import {
  Checkbox,
  Drawer,
  BurgerButton,
  Reboot,
  Typography,
  Link,
  Navigation,
} from '@components';
import { LightTheme, DarkTheme } from '@design';
import {
  Provider as DrawerContextProvider,
  Consumer as DrawerContextConsumer,
} from '@context/DrawerContext';

const AppRoot = () => {
  const [theme, setTheme] = useState(LightTheme);

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Reboot />
        <DrawerContextProvider active={false}>
          <DrawerContextConsumer>
            {context => (
              <React.Fragment>
                <BurgerButton
                  checked={context.active}
                  afterChecked={context.activate}
                  afterUnchecked={context.deactivate}
                />
                <Drawer
                  open={context.active}
                  afterClose={context.deactivate}
                  afterOpen={context.activate}
                >
                  <Typography
                    component="h5"
                    style={{
                      marginTop: '60px',
                      padding: '8px 30px',
                      fontSize: '1.2rem',
                    }}
                  >
                    Menu
                  </Typography>
                  <Navigation>
                    <Link internal={true} exact href="/">
                      Home
                    </Link>
                    <Link internal={true} href="/about">
                      About
                    </Link>
                    <div>
                      <Checkbox
                        id="theme-switcher"
                        checked={true}
                        afterChecked={() => setTheme(LightTheme)}
                        afterUnchecked={() => setTheme(DarkTheme)}
                      />
                    </div>
                  </Navigation>
                </Drawer>
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
