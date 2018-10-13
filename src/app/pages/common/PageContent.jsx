import styled from 'styled-components';
import { Row } from 'ls-react-grid';

export default styled(Row)`
  flex-grow: 1;
  border-top: 6px solid;
  border-image: linear-gradient(
      to right,
      ${props => props.theme.primary} 0%,
      ${props => props.theme.secondary} 100%
    )
    1;
  background-color: ${props => props.theme.background.disabled};
  padding-top: 20px;
  padding-bottom: 20px;
`;
