import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class BurgerButton extends React.PureComponent {
  static propTypes = {
    active: PropTypes.bool,

    className: PropTypes.string,

    afterActive: PropTypes.func,

    afterDeactive: PropTypes.func,

    onClick: PropTypes.func,
  };

  static defaultTypes = {
    active: false,

    className: 'button__burger',
  };

  constructor(props) {
    super(props);

    this.state = {
      active: props.active,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevState.active && this.state.active) {
      if (this.props.afterActive) {
        this.props.afterActive();
      }
    }

    if (prevState.activate && !this.state.active) {
      if (this.props.afterDeactive) {
        this.props.afterDeactive();
      }
    }
  }

  render() {
    const className = `${this.props.className} ${
      this.props.active ? 'active' : null
    }`;

    return (
      <div
        tabIndex="0"
        role="button"
        aria-label="Toggle Navigation"
        aria-pressed={this.state.active}
        className={className}
        onClick={this.props.onClick}
      >
        <div className="line" />
        <div className="line" />
        <div className="line" />
      </div>
    );
  }
}

export default styled(BurgerButton)`
  position: fixed;
  top: 7px;
  left: 5px;
  display: flex;
  width: 40px;
  height: 40px;
  padding: 11px;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.33s ease-in-out;
  border-radius: 50%;
  z-index: 11;
  outline: 0;
  background-color: transparent;

  @media screen and (min-width: 991px) {
    top: 7px;
    left: 18px;
  }

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.background_secondary};
  }

  &:active,
  &.active {
    transform: rotate(-45deg);
  }

  .line {
    background-color: ${({ theme }) => theme.text_primary};
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
