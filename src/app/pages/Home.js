import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import ReactGA from 'react-ga';
import { Typography } from '@components';

class Home extends Component {
  static propTypes = {
    history: PropTypes.object,
  };

  static defaultProps = {};

  injectPageMetadata = () => (
    <Helmet>
      <title>
        Stefan Lazarevic - Fullstack Developer and Javascript Engeneer
      </title>
      <meta
        name="description"
        content="Stefan Lazarevic, an experienced web developer specialized in web technologies and Javascript programming language."
      />
    </Helmet>
  );

  componentDidMount() {
    ReactGA.pageview('/');
  }

  goToAboutPage = () => {
    this.props.history.push('/about');
  };

  render = () => <Typography>Hello</Typography>;
}

export default Home;
