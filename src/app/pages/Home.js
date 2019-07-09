import React, { Component } from 'react';
import Helmet from 'react-helmet';
import ReactGA from 'react-ga';
import { Container, Header, Page, Typography } from '@components';

class Home extends Component {
  static propTypes = {};
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

  render = () => (
    <Page>
      <Header>
        <Typography component="small">Home</Typography> /{' '}
        <Typography component="small">About</Typography>
      </Header>
      {this.injectPageMetadata()}
      <Container>
        <Typography component="h1">
          Passionate <br /> Web Developer
        </Typography>
        <Typography>
          Hello! My name is Stefan Lazarević. Welcome to my website! I am a web
          developer based in Belgrade, Serbia. I help organizations develop
          custom web-based software, as well as build beautiful marketing and
          portfolio websites. I&#39;m currently full-time employed as web
          developer at <a href="#">Scopic Software</a>. During the last two
          years I&#39;ve been working on various project to polish my skills in
          web development on both frontend and backend. My favourite language is
          JavaScript but I also love to develop in PHP.
        </Typography>
      </Container>
    </Page>
  );
}

export default Home;
