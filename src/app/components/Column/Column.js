import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const breakpoints = {
  xs: '576px',
  sm: '768px',
  md: '992px',
  lg: '1200px',
  xlg: '1600px',
};

const widthGenerator = col => {
  if (col === 'hidden') {
    return 'display: none;';
  } else if (col === 'auto') {
    return 'flex: 1 1 auto;';
  } else {
    return `
      flex: 0 1 ${(col / 12) * 100}%;
      max-width: ${(col / 12) * 100}%;
    `;
  }
};

const ColumnBase = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  padding-left: 15px;
  padding-right: 15px;
  flex: 1 1 auto;
  max-width: 100%;
`;

const ColumnMedia = styled(ColumnBase)`
  ${({ col }) => {
    return css`
      ${widthGenerator(col)};
    `;
  }};

  ${({ xs }) => {
    return css`
      @media screen and (min-width: ${breakpoints.xs}) {
        ${widthGenerator(xs)};
      }
    `;
  }};

  ${({ sm }) => {
    return css`
      @media screen and (min-width: ${breakpoints.sm}) {
        ${widthGenerator(sm)};
      }
    `;
  }};

  ${({ md }) => {
    return css`
      @media screen and (min-width: ${breakpoints.md}) {
        ${widthGenerator(md)};
      }
    `;
  }};

  ${({ lg }) => {
    return css`
      @media screen and (min-width: ${breakpoints.lg}) {
        ${widthGenerator(lg)};
      }
    `;
  }};

  ${({ xlg }) => {
    return css`
      @media screen and (min-width: ${breakpoints.xlg}) {
        ${widthGenerator(xlg)};
      }
    `;
  }};
`;

ColumnMedia.propTypes = {
  col: PropTypes.oneOf([
    'hidden',
    'auto',
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
  ]),
  xs: PropTypes.oneOf([
    'hidden',
    'auto',
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
  ]),
  sm: PropTypes.oneOf([
    'hidden',
    'auto',
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
  ]),
  md: PropTypes.oneOf([
    'hidden',
    'auto',
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
  ]),
  lg: PropTypes.oneOf([
    'hidden',
    'auto',
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
  ]),
  xlg: PropTypes.oneOf([
    'hidden',
    'auto',
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
  ]),
};

export default ColumnMedia;
