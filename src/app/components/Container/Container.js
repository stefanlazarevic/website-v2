import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const ContainerBase = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
  width: 100%;
`;

const ContainerMedia = styled(ContainerBase)`
  ${({ fluid }) => {
    if (!fluid) {
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

        @media screen and (min-width: 1600px) {
          max-width: 1540px;
        }
      `;
    }
  }};
`;

ContainerMedia.propTypes = {
  fluid: PropTypes.bool.isRequired,
};

ContainerMedia.defaultProps = {
  fluid: false,
};

export default ContainerMedia;
