import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class Toggle extends React.Component {
  static propTypes = {
    checked: PropTypes.bool.isRequired,

    className: PropTypes.string,

    id: PropTypes.string.isRequired,

    onChange: PropTypes.func.isRequired,

    disabled: PropTypes.bool.isRequired,
  };

  static defaultProps = {
    checked: false,

    disabled: false,
  };

  constructor(props) {
    super(props);

    this.state = { checked: props.checked, disabled: props.disabled };
  }

  static getDerivedStateFromProps(nextProps, state) {
    if (
      nextProps.checked !== state.checked ||
      nextProps.disabled !== state.disabled
    ) {
      return {
        ...state,
        checked: nextProps.checked,
        disabled: nextProps.disabled,
      };
    }
  }

  handleKeyDown = event => {
    if (this.state.disabled) {
      return undefined;
    }

    switch (event.key) {
      case ' ': {
        event.preventDefault();
        event.target.dispatchEvent(new MouseEvent('click'));
        event.target.focus();
      }
    }
  };

  render() {
    return (
      <label
        className={this.props.className}
        htmlFor={this.props.id}
        tabIndex="0"
        onKeyDown={this.handleKeyDown}
        disabled={this.state.disabled}
        aria-pressed={this.state.checked}
        role="switch"
      >
        <input
          id={this.props.id}
          type="checkbox"
          onChange={this.props.onChange}
          checked={this.state.checked}
        />
        <span aria-hidden="true" />
      </label>
    );
  }
}

export default styled(Toggle)`
  width: 2.5rem;
  height: 1.5rem;
  background: #d5d9dd;
  border-radius: 1rem;
  position: relative;
  display: inline-block;
  vertical-align: middle;
  outline: 0;
  border: 1px solid transparent;
  transition: background-color 0.5s ease;
  cursor: pointer;

  &[aria-pressed='true'] {
    background-color: #6fdc45;
  }

  &:focus {
    border-color: ${({ theme }) => theme.text_primary};
  }

  input {
    appearance: none;
    margin: 0; /* Fixing focus border. */
    pointer-events: none;
    visibility: hidden;
  }

  span {
    width: 1rem;
    height: 1rem;
    background: #fff;
    border-radius: 100%;
    position: absolute;
    top: 3px;
    left: 0;
    transform: translateX(3px);
    transition: 0.5s all ease;
  }

  input:checked + span {
    transform: translateX(calc(100% + 3px));
  }
`;
