import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { light, dark } from '../../Theme';

const Slider = styled.label`
  border: 6px solid #06121c;
  border-radius: 100px;
  width: 64px;
  height: 34px;
  position: relative;
  background-color: #06121c;
  box-sizing: content-box;
  z-index: 1;
  transition: border 0.3s, background-color 0.3s, box-shadow 0.3s;
  cursor: pointer;
  margin-bottom: 20px;

  &.light {
    border: 6px solid ${props => props.theme.secondary};
    background-color: ${props => props.theme.secondary};
  }

  &.light input:checked + span {
    left: 30px;
    background-color: #fabc62;
    box-shadow: 0 0 40px 0 #fabc62;
    &:before,
    &:after {
      background-color: rgba(250, 188, 98, 0);
    }
  }
`;

const Input = styled.input`
  display: none;
`;

const Circle = styled.span`
  position: absolute;
  width: 34px;
  height: 34px;
  background-color: #fefaf4;
  border-radius: 50%;
  top: 0;
  left: 0;
  transition: left 0.3s, background-color 0.7s, box-shadow 0.3s;
  box-shadow: 0 0 20px 0 #fefaf4;

  &:before,
  &:after {
    content: '';
    background-color: #dcd8d3;
    position: absolute;
    border-radius: 50%;
    transition: background-color 0.7s;
  }

  &:after {
    height: 10px;
    width: 10px;
    bottom: 20px;
    right: 10px;
  }

  &:before {
    height: 6px;
    width: 6px;
    bottom: 10px;
    right: 20px;
  }
`;

class ThemeSwitch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      light: true,
    };
  }

  toggleState = () => {
    this.setState(state => {
      const isLight = !state.light;

      this.props.onChange(isLight ? light : dark);

      return { light: isLight };
    });
  };

  render = () => {
    return (
      <Slider
        htmlFor="theme"
        className={`${this.state.light ? 'light' : 'dark'}`}
      >
        <Input
          id="theme"
          type="checkbox"
          checked={this.state.light}
          onChange={() => {
            this.toggleState();
          }}
        />
        <Circle />
      </Slider>
    );
  };
}

ThemeSwitch.propTypes = {
  onChange: PropTypes.func,
};

ThemeSwitch.defaultProps = {
  onChange: () => undefined,
};

export default ThemeSwitch;
