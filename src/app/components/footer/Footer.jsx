import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { Row, Column } from 'ls-react-grid';

import {
  LinkedinIcon,
  GithubIcon,
  SkypeIcon,
  DownloadIcon,
} from '../icons/Icons';

import FooterIcon from './FooterIcon';
import FooterIconLink from './FooterIconLink';

const StyledFooter = styled(Row)`
  border-top: 1px solid ${props => props.theme.border.primary};
  padding: 5px 0;
  align-items: center;
  height: 80px;
  background-color: ${props => props.theme.background.primary};
`;

const CopyrightNotice = styled.small`
  color: ${props => props.theme.text.secondary};
  font-family: 'Nunito', sans-serif;
`;

class Footer extends PureComponent {
  render = () => (
    <StyledFooter>
      <Column>
        <CopyrightNotice>
          &copy; Stefan Lazarevic 2018 <small>@version 0.2.1</small>
        </CopyrightNotice>
      </Column>
      <Column fixed width="300px">
        <Row justify="even" style={{ padding: '0 15px' }}>
          <FooterIconLink href="#" rel="download">
            <FooterIcon>
              <DownloadIcon />
            </FooterIcon>
          </FooterIconLink>
          <FooterIconLink href="https://linkedin.com/in/stefan-lazarevic">
            <FooterIcon>
              <LinkedinIcon />
            </FooterIcon>
          </FooterIconLink>
          <FooterIconLink href="https://github.com/stefanlazarevic">
            <FooterIcon>
              <GithubIcon />
            </FooterIcon>
          </FooterIconLink>
          <FooterIconLink href="skype:live:stefanlazarevic.contact">
            <FooterIcon>
              <SkypeIcon />
            </FooterIcon>
          </FooterIconLink>
        </Row>
      </Column>
    </StyledFooter>
  );
}

export default Footer;
