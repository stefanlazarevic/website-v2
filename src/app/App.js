import { hot } from 'react-hot-loader/root';
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { NavLink, Link } from 'react-router-dom';
import { LightTheme, DarkTheme } from '@design';
import {
  Typography,
  Header,
  Global,
  Navigation,
  List,
  Toggle,
  Container,
  Avatar,
  ProfileCard,
  SocialList,
  Button,
  Column,
} from '@components';
import { Row } from 'ls-react-grid';

const AppRoot = () => {
  const [theme, setTheme] = useState(LightTheme);

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Global />
        <Header>
          <Navigation>
            {/* -- List component */}
            <List horizontal={true}>
              <li>
                <NavLink exact to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/portfolio">Portfolio</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
              <li>
                <Toggle
                  id="theme-switch"
                  checked={theme === DarkTheme}
                  onChange={() =>
                    setTheme(theme === LightTheme ? DarkTheme : LightTheme)
                  }
                />
              </li>
            </List>
          </Navigation>
        </Header>
        {/* RootContainer */}
        <div>
          <Container>
            <Row>
              <Column col={12} lg={4} xlg={3}>
                {/* Card */}
                <ProfileCard>
                  {/* Left side */}
                  <Column col={12} md={8} lg={12}>
                    <Row>
                      <Column col={12} sm={12} md={3} lg={12}>
                        <Avatar
                          src="https://www.w3schools.com/bootstrap4/img_avatar3.png"
                          alt="Stefan Lazarevic"
                        />
                      </Column>
                      <Column col={12} sm={12} md={9} lg={12}>
                        <Typography as="h1">Stefan Lazarevic</Typography>
                        <Typography as="p">
                          I am a full stack web developer based in Belgrade
                          (Serbia), specializing mostly in JavaScript and
                          it&#39;s frameworks, but also work with PHP and
                          Laravel. <Link to="/about">Read more</Link>
                        </Typography>
                      </Column>
                    </Row>
                  </Column>
                  {/* Right side */}
                  <Column col={12} md={4} lg={12}>
                    <Row>
                      <Column col={12}>
                        <SocialList />
                      </Column>
                      <Column col={12}>
                        <Button>Download Resume</Button>
                      </Column>
                    </Row>
                  </Column>
                </ProfileCard>
              </Column>
              <Column>{/* Router */}</Column>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    </ThemeProvider>
  );
};

export default hot(AppRoot);
