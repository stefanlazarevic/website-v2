import React from 'react';
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

const Link = props => {
  const { to, href, className, ...rest } = props;

  if (props.internal) {
    return <NavLink to={to || href || '#'} className={className} {...rest} />;
  } else {
    return <a href={to || href || '#'} className={className} {...rest} />;
  }
};

export default styled(Link)`
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
`;
