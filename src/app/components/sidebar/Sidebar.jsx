import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledSidebar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 80px;
  height: 100%;
  min-height: 100vh;
  border-right: 1px solid ${props => props.theme.border.primary};
  z-index: 1;
  background-color: ${props => props.theme.background.primary};
`;

class Sidebar extends PureComponent {
  render = () => <StyledSidebar>{this.props.children}</StyledSidebar>;
}

Sidebar.propTypes = {
  children: PropTypes.node,
};

export default Sidebar;
