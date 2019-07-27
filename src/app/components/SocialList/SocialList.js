import React from 'react';
import PropTypes from 'prop-types';
import { List } from '@components';
import styled from 'styled-components';
import { Instagram, Github, Twitter, Linkedin, Stackoverflow } from '@icons';

const SocialList = props => {
  return (
    <List className={props.className}>
      <li>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          title="linkedin"
          aria-hidden="true"
        >
          <Linkedin width="26px" />
        </a>
      </li>
      <li>
        <a
          href="https://github.com/stefanlazarevic"
          target="_blank"
          rel="noopener noreferrer"
          title="github"
          aria-hidden="true"
        >
          <Github width="26px" />
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/dev_lazarevic"
          target="_blank"
          rel="noopener noreferrer"
          title="twitter"
          aria-hidden="true"
        >
          <Twitter width="26px" />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/dev_lazarevic/"
          target="_blank"
          rel="noopener noreferrer"
          title="instagram"
          aria-hidden="true"
        >
          <Instagram width="26px" />
        </a>
      </li>
      <li>
        <a
          href="https://stackoverflow.com/users/7909022/stefan-lazarevi%c4%87"
          target="_blank"
          rel="noopener noreferrer"
          title="stackoverflow"
          aria-hidden="true"
        >
          <Stackoverflow width="24px" />
        </a>
      </li>
    </List>
  );
};

SocialList.propTypes = {
  className: PropTypes.string,
};

export default styled(SocialList)`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
  flex-wrap: wrap;
  justify-content: flex-start;

  li {
    margin-right: 20px;
  }

  @media screen and (min-width: 991px) {
    justify-content: center;
  }

  @media screen and (min-width: 1200px) {
    justify-content: flex-start;
  }

  svg {
    fill: ${({ theme }) => theme.text_secondary};
    stroke: ${({ theme }) => theme.text_secondary};

    &:hover,
    &:focus {
      fill: ${({ theme }) => theme.text_primary};
      stroke: ${({ theme }) => theme.text_primary};
    }
  }
`;
