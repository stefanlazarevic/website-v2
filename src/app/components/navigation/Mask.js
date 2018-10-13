import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DimmedBackground = styled.div`
  position: fixed;
  visibility: hidden;
  opacity: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(8, 11, 16, 0.7);
  z-index: 9;
  transition: opacity 0.2s linear;

  &.active {
    visibility: visible;
    opacity: 1;
  }
`;

class Mask extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: props.active,
    };
  }

  setActiveState = state => this.setState(() => ({ active: state }));

  render = () => (
    <DimmedBackground
      onClick={() => {
        this.setActiveState(false);
        this.props.onClick();
      }}
      className={this.state.active ? 'active' : undefined}
    />
  );
}

Mask.propTypes = {
  active: PropTypes.bool,
  onClick: PropTypes.func,
};

Mask.defaultProps = {
  active: false,
  onClick: () => undefined,
};

export default Mask;
