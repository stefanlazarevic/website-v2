import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Container, Row, Column } from 'ls-react-grid';

import PageContent from './common/PageContent';
import Button from '../components/button/Button';
import Anchor from '../components/anchor/Anchor';
import Paragraph from '../components/paragraph/Paragraph';
import { H2 } from '../components/heading/Heading';

class Home extends Component {
  renderPageMeta() {
    return (
      <Helmet>
        <title>Page Title less than 55 characters</title>
        <meta
          name="description"
          content="Description of the page less than 150 characters"
        />
        <meta name="keywords" content="react, demo, keywords" />
      </Helmet>
    );
  }
  render = () => (
    <PageContent align="middle">
      <Container>
        {this.renderPageMeta()}
        <Row>
          <Column xs={12} md={7}>
            <Row>
              <Column xs={12}>
                <H2>
                  Passionate
                  <br />
                  Web Developer
                </H2>
                <Paragraph style={{ paddingRight: 15 }}>
                  Hello! My name is Stefan Lazarević. Welcome to my website! I
                  am a web developer based in Belgrade, Serbia. I help
                  organizations develop custom web-based software, as well as
                  build beautiful marketing and portfolio websites. I'm
                  currently full-time employed as web developer at{' '}
                  <Anchor href="#">Scopic Software</Anchor>. During the last two
                  years I've been working on various project to polish my skills
                  in web development on both frontend and backend. My favourite
                  language is JavaScript but I also love to develop in PHP.
                </Paragraph>
                <Button>More about me</Button>
              </Column>
            </Row>
          </Column>
          <Column xs="hidden" md={5}>
            <Row align="middle">
              <Column xs={12}>
                <img
                  style={{ marginTop: 60 }}
                  src="img/svg/programming.svg"
                  alt="mage"
                />
              </Column>
            </Row>
          </Column>
        </Row>
      </Container>
    </PageContent>
  );
}

export default Home;
