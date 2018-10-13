import styled from 'styled-components';

export default styled.a`
  outline-color: ${props => props.theme.secondary};

  &:hover,
  &:focus {
    background-color: ${props => props.theme.background.secondary};
  }
`;
