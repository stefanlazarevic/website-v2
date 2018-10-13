import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const AnimatedButton = styled.button`
  display: inline-block;
  position: relative;
  font-family: 'Poppins', sans-serif;
  font-size: 16px; /* (0.8rem) */
  padding-top: 8px; /* (0.4rem) */
  padding-bottom: 8px; /* (0.4rem) */
  text-align: center;
  border-radius: 4px;
  border: 1px solid ${props => props.theme.primary};
  background-color: ${props => props.theme.primary};
  color: #ffffff;
  outline: 0;
  cursor: pointer;
  overflow: hidden;
  margin-bottom: 20px; /* (1rem) */
  max-width: 220px;

  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.15);
    transform: translateX(-100%);
    transition: transform 0.3s ease-in;
  }

  &:hover,
  &:focus {
    &:before {
      transform: translateX(0);
    }
  }
`;

class Button extends PureComponent {
  render = () => <AnimatedButton>{this.props.children}</AnimatedButton>;
}

Button.propTypes = {
  children: PropTypes.node,
};

export default Button;
