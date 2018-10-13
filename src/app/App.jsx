import React, { Component, Fragment } from 'react';
import { ThemeProvider } from 'styled-components';

import PageContainer from './pages/common/PageContainer';
import AppRouter from './routes/AppRouter';
import { light, dark } from './Theme';

import Footer from './components/footer/Footer';
import Sidebar from './components/sidebar/Sidebar';
import NavigationTrigger from './components/navigation/NavigationTrigger';
import Mask from './components/navigation/Mask';
import Navigation from './components/navigation/Navigation';
import NavigationMenu from './components/navigation/NavigationMenu';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: light,
    };
  }

  setSiteThemeTo = theme => this.setState(() => ({ theme }));

  render = () => (
    <ThemeProvider theme={this.state.theme}>
      <Fragment>
        <NavigationTrigger
          ref={navTrigger => (this.navTrigger = navTrigger)}
          onClick={currentState => {
            this.navigation.setActiveState(currentState);
            this.mask.setActiveState(currentState);
            this.navMenu.setActiveState(currentState);
          }}
        />
        <Mask
          ref={mask => (this.mask = mask)}
          onClick={() => {
            this.navTrigger.setActiveState(false);
            this.navigation.setActiveState(false);
            this.navMenu.setActiveState(false);
          }}
        />
        <Sidebar />
        <Navigation ref={navigation => (this.navigation = navigation)}>
          <NavigationMenu
            ref={navMenu => (this.navMenu = navMenu)}
            onThemeChange={this.setSiteThemeTo}
          />
        </Navigation>
        <PageContainer fluid>
          <AppRouter />
          <Footer />
        </PageContainer>
      </Fragment>
    </ThemeProvider>
  );
}

export default App;
