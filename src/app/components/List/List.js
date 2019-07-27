import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const List = props => {
  const Root = props.component;

  return (
    <Root className={props.className} type={props.type} start={props.start}>
      {props.children}
    </Root>
  );
};

List.propTypes = {
  component: PropTypes.oneOf(['ul', 'ol', 'dl']),

  className: PropTypes.string,

  children: PropTypes.node,

  type: PropTypes.string,

  start: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

List.defaultProps = {
  component: 'ul',
};

const StyledList = styled(List)`
  margin: 0;
  word-break: break-word;

  ${({ type }) => {
    if (type === 'none') {
      return css`
        padding-left: 0;
      `;
    }
  }};

  ${({ horizontal }) => {
    if (horizontal) {
      return css`
        li {
          display: inline-block;
          margin-left: 4px;
          vertical-align: middle;
        }
      `;
    }
  }};
`;

StyledList.propTypes = {
  horizontal: PropTypes.bool.isRequired,
};

StyledList.defaultProps = {
  type: 'none',

  horizontal: false,
};

export default StyledList;
