import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const NavigationContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: ${props => props.theme.background.primary};
  width: 420px;
  height: 100vh;
  transform: translateX(-421px);
  transition: transform 0.2s linear;
  border-right: 1px solid ${props => props.theme.border.primary};
  overflow-y: auto;

  &.active {
    transform: translateX(0);
  }
`;

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: props.active,
    };
  }

  setActiveState = state => this.setState(() => ({ active: state }));

  render = () => {
    return (
      <NavigationContainer className={this.state.active ? 'active' : undefined}>
        {this.props.children}
      </NavigationContainer>
    );
  };
}

Navigation.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
};

Navigation.defaultProps = {
  active: false,
};

export default Navigation;
