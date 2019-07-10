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

const StyledCheckbox = styled(Checkbox)`
  background: red;
`;

export default Checker(StyledCheckbox);
