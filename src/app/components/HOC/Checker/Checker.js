import React from 'react';
import PropTypes from 'prop-types';

export default BaseComponent => {
  class Checker extends React.Component {
    static propTypes = {
      checked: PropTypes.bool.isRequired,
    };

    static defaultProps = {
      checked: true,
    };

    constructor(props) {
      super(props);

      this.state = {
        checked: props.checked,
        prevChecked: props.checked,
      };
    }

    check = () => this.setState(() => ({ checked: true }));

    uncheck = () => this.setState(() => ({ checked: false }));

    toggle = () => (this.state.checked ? this.uncheck() : this.check());

    handleKeyDown = event => {
      const { keyCode } = event;

      /** 13 => Enter, 32 => Space */
      if (keyCode === 13 || keyCode === 32) {
        event.preventDefault();
        this.toggle();
      }
    };

    static getDeriveredStateFromProps(nextProps, prevState) {
      if (nextProps.checked !== prevState.checked) {
        return { checked: nextProps.checked, prevChecked: nextProps.checked };
      }

      return null;
    }

    shouldComponentUpdate(nextProps, nextState) {
      if (nextState.checked !== this.state.checked) {
        return true;
      }

      return false;
    }

    componentDidUpdate(prevProps, prevState) {
      if (!prevState.checked && this.state.checked) {
        if (this.props.afterChecked) {
          this.props.afterChecked();
        }
      }

      if (prevState.activate && !this.state.checked) {
        if (this.props.afterUnchecked) {
          this.props.afterUnchecked();
        }
      }
    }

    render() {
      return (
        <BaseComponent
          {...this.props}
          checked={this.state.checked}
          onChange={this.toggle}
          onClick={this.toggle}
          onKeyDown={this.handleKeyDown}
        />
      );
    }
  }

  return Checker;
};
