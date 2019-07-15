import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Container = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  padding: 0 15px;
  margin-left: auto;
  margin-right: auto;
  flex-direction: column;

  ${({ fluid }) => {
    if (!fluid || fluid === false) {
      return css`
        @media screen and (min-width: 576px) {
          max-width: 540px;
        }

        @media screen and (min-width: 768px) {
          max-width: 720px;
        }

        @media screen and (min-width: 992px) {
          max-width: 960px;
        }

        @media screen and (min-width: 1200px) {
          flex-direction: row;
          max-width: 1140px;
        }
      `;
    }
  }};
`;

Container.propTypes = {
  fluid: PropTypes.bool,
};

Container.defaultProps = {
  fluid: false,
};

export default Container;
