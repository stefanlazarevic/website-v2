import styled from 'styled-components';

export default styled.a`
  display: inline-block;
  text-decoration: none;
  position: relative;
  color: ${props => props.theme.link.primary};
  z-index: 2;
  outline: 0;

  &:after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    position: absolute;
    bottom: 2px;
    left: 0;
    background-color: ${props => props.theme.link.primary};
    transition: width 0.2s ease-in;
  }

  &:hover,
  &:focus {
    :after {
      width: 100%;
    }
  }
`;
