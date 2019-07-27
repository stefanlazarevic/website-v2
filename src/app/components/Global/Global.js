import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html {
    background-color: ${({ theme }) => theme.background_tertiary};
    font-family: Nunito, sans-serif;

    @media screen and (min-width: 991px) {
      font-size: 15px;
    }

    @media screen and (min-width: 1200px) {
      font-size: 16px;
    }

    @media screen and (min-width: 1600px) {
      font-size: 18px;
    }
  }
`;
