import React from 'react';
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

const Link = props => {
  const { forwardRef, internal, to, href, className, ...rest } = props;

  if (internal) {
    return (
      <NavLink
        innerRef={forwardRef}
        to={to || href || '#'}
        className={className}
        {...rest}
      />
    );
  } else {
    return (
      <a
        ref={forwardRef}
        href={to || href || '#'}
        className={className}
        {...rest}
      />
    );
  }
};

Link.displayName = 'Link';

export default styled(Link)`
  font-size: 0.75rem;
  line-height: 1.75rem;
  margin: 1.5rem 0;

  ${({ theme }) => css`
    color: ${theme.primary};
  `};

  &:hover,
  &:focus {
    color: rgb(64, 169, 243);
  }

  @media screen and (min-width: 991px) {
    font-size: 1rem;
    line-height: 2rem;
  }
`;
