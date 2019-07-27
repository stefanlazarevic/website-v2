import { Row } from 'ls-react-grid';
import styled from 'styled-components';

export default styled(Row)`
  border-radius: 14px;
  padding: 20px 0;
  background-color: ${({ theme }) => theme.background_primary};

  @media screen and (min-width: 1200px) {
    background-color: transparent;
  }

  p {
    line-height: 1.75;
  }

  button {
    margin-top: 20px;
    background-color: #2e3541;
    border-color: #2e3541;

    @media screen and (min-width: 1200px) {
      background-color: #171a1f;
      border-color: #171a1f;
    }
  }
`;
