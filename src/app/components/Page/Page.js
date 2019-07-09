import styled from 'styled-components';

export default styled.div`
  padding-top: 60px;
  overflow-y: auto;
  height: 100vh;
  border-left: 1px solid ${({ theme }) => theme.border_primary};
`;
