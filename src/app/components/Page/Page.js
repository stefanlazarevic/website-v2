import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 100px;
  overflow-y: auto;
  height: 100vh;
  border-left: 1px solid ${({ theme }) => theme.border_primary};
`;
