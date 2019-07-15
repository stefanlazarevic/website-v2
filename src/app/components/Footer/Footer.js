import styled from 'styled-components';

export default styled.footer`
  position: relative;
  bottom: 0;
  left: 0;
  border-top: 1px solid ${({ theme }) => theme.border_primary};
  padding: 15px 0;
`;
