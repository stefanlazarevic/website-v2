import styled from 'styled-components';

export default styled.button`
  display: inline-block;
  position: relative;
  border-radius: 4px;
  color: #fff;
  outline: 0;
  cursor: pointer;
  overflow: hidden;
  width: 100%;
  max-width: 160px;
  background-color: ${({ theme }) => theme.primary};
  border: 1px solid ${({ theme }) => theme.primary};
  font-size: 0.75rem;
  line-height: 1.4rem;

  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.15);
    transform: translateX(-100%);
    transition: transform 0.3s ease-in;
  }

  &:hover,
  &:focus {
    &:before {
      transform: translateX(0);
    }
  }

  @media screen and (min-width: 991px) {
    max-width: 220px;
    font-size: 0.9rem;
    line-height: 1.8rem;
  }
`;
