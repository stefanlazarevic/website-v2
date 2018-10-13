import React, { Component } from 'react';
import PageContent from './common/PageContent';
import { Container, Row } from 'ls-react-grid';

import { H2 } from '../components/heading/Heading';

class NotFound extends Component {
  render = () => (
    <PageContent>
      <Container>
        <Row justify="center" align="middle" style={{ height: '100%' }}>
          <H2>Page not found.</H2>
        </Row>
      </Container>
    </PageContent>
  );
}

export default NotFound;
