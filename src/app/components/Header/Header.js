import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Header = props => {
  return <header className={props.className}>{props.children}</header>;
};

Header.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Header.defaultProps = {};

export default styled(Header)`
  display: block;
  width: 100%;
  background-color: ${({ theme }) => theme.background_primary};
  padding: 10px 15px;
  margin-bottom: 30px;
`;
