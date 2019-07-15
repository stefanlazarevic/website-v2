import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class Navigation extends React.Component {
  static propTypes = {
    children: PropTypes.node,

    className: PropTypes.string,
  };

  handleKeyDownEvent = (event, index) => {
    switch (event.key) {
      case 'ArrowDown':
        this.focusNext(index);
        break;
      case 'ArrowUp':
        this.focusPrevious(index);
        break;
    }
  };

  bindReference = link => {
    this.links.push(link);
  };

  focusFirst = () => {
    if (!this.links.length) {
      return undefined;
    }

    this.links[0].focus();
  };

  focusLast = () => {
    if (!this.links.length) {
      return undefined;
    }

    this.links[this.links.length - 1].focus();
  };

  focusNext = index => {
    if (!this.links.length || index < 0 || index >= this.links.length) {
      return undefined;
    }

    this.links[index].blur();

    if (index === this.links.length - 1) {
      index = 0;
    } else {
      ++index;
    }

    this.links[index].focus();
  };

  focusPrevious = index => {
    if (!this.links.length || index < 0 || index >= this.links.length) {
      return undefined;
    }

    this.links[index].blur();

    if (index === 0) {
      index = this.links.length - 1;
    } else {
      --index;
    }

    this.links[index].focus();
  };

  componentWillMount() {
    this.links = [];
  }

  render() {
    return (
      <nav role="menubar" className={this.props.className}>
        {React.Children.map(this.props.children, (child, index) => {
          if (child.type && child.type.displayName === 'Link___default') {
            const props = {
              ...child.props,
              forwardRef: this.bindReference,
              role: 'menuitem',
              onKeyDown: event => this.handleKeyDownEvent(event, index),
            };

            return React.cloneElement(child, props);
          }

          return child;
        })}
      </nav>
    );
  }
}

export default styled(Navigation)`
  padding-left: 0;

  a {
    display: block;
    padding: 5px 18px;
    font-size: 1rem;
    margin: 0;
    outline: 0;
    text-decoration: none;
    color: ${({ theme }) => theme.text_secondary};

    @media screen and (min-width: 991px) {
      padding-left: 30px;
    }

    &:hover,
    &:focus {
      background-color: ${({ theme }) => theme.navigation.hover};
      color: ${({ theme }) => theme.text_primary};
      text-decoration: none;
    }

    &.active {
      background-color: ${({ theme }) => theme.navigation.active_background};
      border-right: 3px solid ${({ theme }) => theme.primary};
      color: ${({ theme }) => theme.primary};
      text-decoration: none;
    }
  }
`;
