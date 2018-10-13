import styled from 'styled-components';

const Badge = styled.div`
  display: inline-block;
  font-size: 14px;
  height: 26px;
  line-height: 26px;
  border-radius: 6px;
  padding: 0 9px;
  vertical-align: middle;
  margin: 0 5px;
`;

const ColorBadge = styled(Badge)`
  color: ${({ color }) => color || '#fff'};
`;

const BgColorBadge = styled(ColorBadge)`
  background-color: ${({ bgColor, theme }) => bgColor || theme.secondary};
`;

export default BgColorBadge;
