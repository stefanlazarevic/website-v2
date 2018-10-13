import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const P = styled.p`
  font-family: 'Nunito', sans-serif;
  font-size: 20px;
  line-height: 34px; /* (1.7rem) */
  margin: 0 0 30px; /* 0 0 1.5rem */
  color: ${props => props.theme.text.secondary};
  font-weight: 300;
`;

class Paragraph extends PureComponent {
  render = () => <P {...this.props}>{this.props.children}</P>;
}

Paragraph.propTypes = {
  children: PropTypes.node,
};

export default Paragraph;
