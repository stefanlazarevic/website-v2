import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Icon = styled.div`
  position: fixed;
  top: 15px;
  left: 15px;
  display: flex;
  width: 20px;
  height: 20px;
  padding: 15px;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.33s ease-in-out;
  border-radius: 50%;
  z-index: 11;
  outline: 0;
  background-color: transparent;

  &:hover,
  &:focus {
    background-color: ${props => props.theme.background.secondary};
  }

  &:active,
  &.active {
    transform: rotate(-45deg);
  }

  .line {
    background-color: ${props => props.theme.text.primary};
    border-radius: 5px;
    width: 100%;
    height: 3px;

    &:first-child,
    &:last-child {
      width: 50%;
    }

    &:first-child {
      transition: transform 330ms cubic-bezier(0.54, -0.81, 0.57, 0.57);
      transform-origin: right;
    }

    &:last-child {
      align-self: flex-end;
      transition: transform 330ms cubic-bezier(0.54, -0.81, 0.57, 0.57);
      transform-origin: left;
    }
  }

  &.active .line:first-child {
    transform: rotate(-90deg) translateX(1px);
  }

  &.active .line:last-child {
    transform: rotate(-90deg) translateX(-2px);
  }
`;

class NavigationTrigger extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: props.active,
    };
  }

  toggleState = () => {
    this.setState(state => {
      const newState = !state.active;
      this.props.onClick(newState);
      return {
        active: newState,
      };
    });
  };

  setActiveState = bool => this.setState(() => ({ active: bool }));

  render = () => {
    return (
      <Icon
        title="Toggle Navigation"
        tabIndex="1"
        role="button"
        aria-label="Toggle Navigation"
        aria-pressed={this.state.active.toString()}
        className={this.state.active ? 'active' : undefined}
        onClick={() => {
          this.toggleState();
        }}
        onKeyPress={event =>
          event.key === 'Enter' ? this.toggleState() : undefined
        }
      >
        <div className="line" />
        <div className="line" />
        <div className="line" />
      </Icon>
    );
  };
}

NavigationTrigger.propTypes = {
  active: PropTypes.bool,
  onClick: PropTypes.func,
};

NavigationTrigger.defaultProps = {
  active: false,
  onClick: () => undefined,
};

export default NavigationTrigger;
