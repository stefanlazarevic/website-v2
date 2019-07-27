import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Typography = props => {
  const Root = props.component;

  return <Root className={props.className}>{props.children}</Root>;
};

Typography.propTypes = {
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'small']),
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
  children: PropTypes.node,
  className: PropTypes.string,
};

Typography.defaultProps = {
  as: 'h1',
  component: 'h1',
};

export default styled(Typography)`
  font-weight: 400;
  margin: 0;
  word-break: break-word;

  ${({ as }) => {
    switch (as) {
      case 'h1':
        return css`
          font-size: 2.5em;
          color: ${({ theme }) => theme.text_primary};
        `;
      case 'h2':
        return css`
          font-size: 2rem;
          color: ${({ theme }) => theme.text_primary};
        `;
      case 'h3':
        return css`
          font-size: 1.75rem;
          color: ${({ theme }) => theme.text_primary};
        `;
      case 'h4':
        return css`
          font-size: 1.5rem;
          color: ${({ theme }) => theme.text_primary};
        `;
      case 'h5':
        return css`
          font-size: 1.25rem;
          color: ${({ theme }) => theme.text_primary};
        `;
      case 'h6':
        return css`
          font-size: 1rem;
          color: ${({ theme }) => theme.text_primary};
        `;
      case 'p':
        return css`
          font-size: 1rem;
          color: ${({ theme }) => theme.text_secondary};
        `;
      case 'small':
        return css`
          font-size: 0.85rem;
          color: ${({ theme }) => theme.text_secondary};
        `;
    }
  }};

  a,
  a:visited {
    text-decoration: none;
    color: ${({ theme }) => theme.text_link};
  }
`;
