import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Typography = styled(({ component, children, ...props }) =>
  React.createElement(component, { ...props }, children)
)`
  font-family: 'Nunito', sans-serif;
  font-weight: 300;
  margin: 0;

  ${({ theme }) => css`
    color: ${theme.text_primary};
  `} ${props =>
    props.component === 'h1' &&
    css`
      font-size: 2rem;
      margin-bottom: 2rem;
    `};

  ${props =>
    props.component === 'p' &&
    css`
      font-size: 0.75rem;
      line-height: 1.75rem;
      margin: 1.5rem 0;

      ${({ theme }) => css`
        color: ${theme.text_secondary};
      `};

      @media screen and (min-width: 991px) {
        font-size: 1rem;
        line-height: 2rem;
      }
    `};
`;

Typography.propTypes = {
  component: PropTypes.oneOf([
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'p',
    'small',
  ]),
};

Typography.defaultProps = {
  component: 'p',
};

export default Typography;
