import React, { Fragment } from 'react';
import styled, { css, createGlobalStyle } from 'styled-components';
import Drawer from '@devlazarevic/react-drawer';

const GlobalStyle = createGlobalStyle`
  .drawer__overlay {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(8,11,16,0.7);
    z-index: 8;
  }
`;

export default styled(({ className, ...props }) => (
  <Fragment>
    <GlobalStyle />
    <Drawer
      open={true}
      overlay={true}
      trapFocus={true}
      className={className}
      {...props}
    />
  </Fragment>
))`
  position: fixed;
  top: 0;
  left: 0;
  width: 300px;
  height: 100%;
  z-index: 9;
  overflow-y: auto;
  ${({ theme }) => css`
    background-color: ${theme.background_primary};
    border-right: 1px solid ${theme.border_primary};
  `};
`;
