import React from 'react';
import { ThemeProvider } from 'styled-components';
import { shallow } from 'enzyme';
import { light, dark } from '../Theme';

export const shallowWithTheme = (tree, theme) => {
  const context = shallow(<ThemeProvider theme={theme} />)
    .instance()
    .getChildContext();
  return shallow(tree, { context });
};

export const shallowWithLightTheme = tree => {
  return shallowWithTheme(tree, light);
};

export const shallowWithDarkTheme = tree => {
  return shallowWithTheme(tree, dark);
};

export default shallowWithTheme;
