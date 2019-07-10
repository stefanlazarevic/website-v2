import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Checker } from '@components/HOC';

const BurgerButton = props => {
  return (
    <div
      tabIndex="0"
      role="button"
      aria-label="Toggle Navigation"
      aria-pressed={props.checked}
      className={props.className}
      onClick={props.onClick}
      onKeyDown={props.onKeyDown}
    >
      <div className="line" />
      <div className="line" />
      <div className="line" />
    </div>
  );
};

BurgerButton.propTypes = {
  checked: PropTypes.bool.isRequired,

  className: PropTypes.string,

  onClick: PropTypes.func,

  onKeyDown: PropTypes.func,
};

BurgerButton.defaultProps = {
  checked: false,
};

export default Checker(styled(BurgerButton)`
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
  &[aria-pressed='true'] {
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

  &[aria-pressed='true'] .line:first-child {
    transform: rotate(-90deg) translateX(1px);
  }

  &[aria-pressed='true'] .line:last-child {
    transform: rotate(-90deg) translateX(-2px);
  }
`);
