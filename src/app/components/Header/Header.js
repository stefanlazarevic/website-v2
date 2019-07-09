import React from 'react';
import styled, { css } from 'styled-components';

const InnerHeader = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.border_primary};
  padding: 10px 15px;
  font-size: 0.8rem;

  small {
    cursor: pointer;
  }
`;

export default styled(props => (
  <header className={props.className}>
    <InnerHeader>{props.children}</InnerHeader>
  </header>
))`
  position: fixed;
  top: 0;
  left: 52px;
  width: 100%;
  border-top: 6px solid;
  z-index: 7;

  ${({ theme }) => {
    return css`
      border-image: linear-gradient(
          to right,
          ${theme.primary} 0%,
          ${theme.secondary} 100%
        )
        1;
      background-color: ${theme.background_primary};
    `;
  }};

  @media screen and (min-width: 991px) {
    left: 81px;
  }
`;
