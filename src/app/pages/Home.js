import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import ReactGA from 'react-ga';
import {
  Button,
  Column,
  Container,
  Footer,
  Header,
  Link,
  Page,
  Row,
  Typography,
} from '@components';

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

  render = () => (
    <Page>
      <Header />
      {this.injectPageMetadata()}
      <Container style={{ flex: 1 }}>
        <Row>
          <Column>
            <Row>
              <Column>
                <Typography component="h1">
                  Passionate <br /> Web Developer
                </Typography>
              </Column>
            </Row>
            <Row>
              <Column>
                <Typography component="p">
                  Hello! My name is Stefan Lazarević. Welcome to my website! I
                  am a web developer based in Belgrade, Serbia. I help
                  organizations develop custom web-based software, as well as
                  build beautiful marketing and portfolio websites. I&#39;m
                  currently full-time employed as web developer at{' '}
                  <Link href="https://scopicsoftware.com" target="_blank">
                    Scopic Software
                  </Link>
                  . During the last two years I&#39;ve been working on various
                  project to polish my skills in web development on both
                  frontend and backend. My favourite language is JavaScript but
                  I also love to develop in PHP.
                </Typography>
              </Column>
            </Row>
            <Row>
              <Column>
                <Button
                  onClick={this.goToAboutPage}
                  style={{ marginBottom: 40 }}
                >
                  More about me
                </Button>
              </Column>
            </Row>
          </Column>
        </Row>
      </Container>
      <Footer>
        <Container fluid={true}>
          <Row>
            <Column>
              <Typography component="small">
                Copyright @ Stefan Lazarevic 2019
              </Typography>
            </Column>
          </Row>
        </Container>
      </Footer>
    </Page>
  );
}

export default Home;
