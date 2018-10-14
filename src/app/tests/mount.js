import React from 'react';
import { ThemeProvider } from 'styled-components';
import { shallow, mount } from 'enzyme';
import { light, dark } from '../Theme';

export const mountWithTheme = (tree, theme) => {
  const context = shallow(<ThemeProvider theme={theme} />)
    .instance()
    .getChildContext();

  return mount(tree, {
    context,
    childContextTypes: ThemeProvider.childContextTypes,
  });
};

export const mountWithLightTheme = tree => {
  return mountWithTheme(tree, light);
};

export const mountWithDarkTheme = tree => {
  return mountWithTheme(tree, dark);
};

export default mountWithTheme;
