import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Checker } from '@components/HOC';

const Checkbox = props => {
  return (
    <div className={props.className} onKeyDown={props.onKeyDown}>
      <input
        id={props.id}
        name={props.name}
        type="checkbox"
        checked={props.checked}
        onChange={props.onChange}
        disabled={props.disabled}
        aria-hidden="true"
      />
      <label
        htmlFor={props.id}
        tabIndex="0"
        aria-checked={props.checked}
        aria-pressed={props.checked}
        aria-hidden={props.disabled}
        aria-label={props.label || props.name}
        role="checkbox"
      >
        <span>{props.children || props.label}</span>
      </label>
    </div>
  );
};

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,

  name: PropTypes.string,

  checked: PropTypes.bool.isRequired,

  disabled: PropTypes.bool.isRequired,

  className: PropTypes.string,

  label: PropTypes.string,

  children: PropTypes.node,

  onChange: PropTypes.func,

  onKeyDown: PropTypes.func,
};

Checkbox.defaultProps = {
  checked: false,

  disabled: false,
};

export default Checker(styled(Checkbox)`
  input {
    display: none;
  }

  label {
    color: ${({ theme }) => theme.text_secondary};
    cursor: pointer;
    position: relative;
    font-size: 1rem;
    outline: 0;

    span {
      display: inline-block;
      vertical-align: middle;
    }
  }

  label:hover,
  label:focus {
    color: ${({ theme }) => theme.text_primary};
  }

  input + label::before {
    content: '';
    display: inline-block;
    vertical-align: middle;
    width: 1em;
    height: 1em;
    border: 1px solid ${({ theme }) => theme.border_primary};
    background-color: ${({ theme }) => theme.background_secondary};
    margin-right: 10px;
    border-radius: 4px;
  }

  input + label:focus::before {
    border-color: ${({ theme }) => theme.border_focus};
  }

  input:checked + label::before {
    background-color: ${({ theme }) => theme.primary};
    border-color: ${({ theme }) => theme.primary};
  }

  input:checked + label::after {
    content: '';
    display: table;
    position: absolute;
    top: 10px;
    left: 7px;
    border: 2px solid #ffffff;
    border-top: 0;
    border-left: 0;
    transform: rotate(45deg);
    width: 6px;
    height: 10px;
  }
`);
