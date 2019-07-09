import React from 'react';
import PropTypes from 'prop-types';

const Context = React.createContext();

export class Provider extends React.PureComponent {
  static propTypes = {
    active: PropTypes.bool.isRequired,

    children: PropTypes.node,
  };

  static defaultProps = {
    active: false,
  };

  state = {
    active: this.props.active,
  };

  activate = () => {
    if (!this.state.active) {
      this.setState(() => ({ active: true }));
    }
  };

  deactivate = () => {
    if (this.state.active) {
      this.setState(() => ({ active: false }));
    }
  };

  toggle = () => (this.state.active ? this.deactivate() : this.activate());

  render() {
    return (
      <Context.Provider
        value={{
          active: this.state.active,
          activate: this.activate,
          deactivate: this.deactivate,
          toggle: this.toggle,
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export class Consumer extends React.PureComponent {
  static propTypes = {
    children: PropTypes.func,
  };

  render() {
    return <Context.Consumer>{this.props.children}</Context.Consumer>;
  }
}
