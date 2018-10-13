import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Row, Column } from 'ls-react-grid';
import { H2 } from '../heading/Heading';
import Badge from '../badge/Badge';
import ThemeSwitch from '../button/ThemeSwitch';

const Nav = styled.nav`
  padding-left: 60px;
  height: 100vh;
`;

const NavHeading = styled(H2)`
  font-weight: 500;
  padding: 80px 15px 10px;
`;

const Ul = styled.ul`
  padding-left: 0;
  list-style: none;
`;

const SiteLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  font-size: 24px;
  font-weight: 300;
  padding: 10px 15px;
  margin-bottom: 10px;
  color: ${props => props.theme.text.secondary};
  transition: all 0.15s ease-out;
  outline: 0;
  border-radius: 6px;
  margin-left: -15px;

  &.active,
  &:hover,
  &:focus {
    color: ${props => props.theme.text.primary};
    background-color: ${props => props.theme.background.secondary};
  }
`;

class NavigationMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: props.active,
    };
  }

  setActiveState = bool => this.setState(() => ({ active: bool }));

  render = () => {
    const { active } = this.state;

    return (
      <Nav>
        <Column style={{ height: '100%' }}>
          <Row>
            <NavHeading>Navigation</NavHeading>
          </Row>
          <Row style={{ flexGrow: 1, overflowY: 'auto' }}>
            <Column>
              <Ul>
                <li>
                  <SiteLink
                    aria-current="true"
                    tabIndex={active ? 1 : -1}
                    to="/"
                    exact
                  >
                    Home
                  </SiteLink>
                </li>
                <li>
                  <SiteLink
                    aria-current="true"
                    tabIndex={active ? 2 : -1}
                    to="/about"
                    exact
                  >
                    About
                  </SiteLink>
                </li>
                <li>
                  <SiteLink
                    aria-current="true"
                    tabIndex={active ? 3 : -1}
                    to="/portfolio"
                    exact
                  >
                    Portfolio
                  </SiteLink>
                </li>
                <li>
                  <SiteLink
                    aria-current="true"
                    tabIndex={active ? 4 : -1}
                    to="/devzone"
                    exact
                  >
                    Dev Zone <Badge>new</Badge>
                  </SiteLink>
                </li>
                <li>
                  <SiteLink
                    aria-current="true"
                    tabIndex={active ? 5 : -1}
                    to="/contact"
                    exact
                  >
                    Contact
                  </SiteLink>
                </li>
              </Ul>
            </Column>
          </Row>
          <Row style={{ padding: '10px 15px' }}>
            <ThemeSwitch onChange={this.props.onThemeChange} />
          </Row>
        </Column>
      </Nav>
    );
  };
}

NavigationMenu.propTypes = {
  active: PropTypes.bool,
  onThemeChange: PropTypes.func,
};

NavigationMenu.defaultProps = {
  active: false,
  onThemeChange: () => undefined,
};

export default NavigationMenu;
