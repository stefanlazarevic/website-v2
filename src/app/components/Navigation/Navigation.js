import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Navigation = props => {
  return <nav className={props.className}>{props.children}</nav>;
};

Navigation.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Navigation.defaultProps = {};

export default styled(Navigation)`
  display: block;
  text-align: right;

  a {
    font-size: 1rem;
    padding: 5px 10px;
    display: block;
    text-decoration: none;
    color: ${({ theme }) => theme.text_secondary};

    &.active,
    &:hover {
      color: ${({ theme }) => theme.text_primary};
    }
  }
`;
