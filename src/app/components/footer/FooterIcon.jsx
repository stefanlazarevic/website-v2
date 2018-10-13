import styled from 'styled-components';

const FooterIcon = styled.div`
  display: inline-block;
  width: 24px;
  height: 24px;
  padding: 10px;
  border-radius: 5px;
  transition: color 0.2s linear;
  color: ${props => props.theme.text.secondary};

  &:hover {
    color: ${props => props.theme.text.primary};
  }

  svg {
    fill: currentColor;
  }
`;

export default FooterIcon;
