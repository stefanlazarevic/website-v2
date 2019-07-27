import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class Avatar extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,

    src: PropTypes.string.isRequired,

    alt: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);

    this.image = React.createRef();
  }

  handleImageError = () => {
    this.image.src = 'static/no-avatar.jpg';
  };

  render() {
    return (
      <div className={this.props.className}>
        <img
          ref={this.image}
          src={this.props.src}
          alt={this.props.alt}
          onError={this.handleImageError}
        />
      </div>
    );
  }
}

export default styled(Avatar)`
  display: inline-block;
  width: 100%;
  vertical-align: middle;
  margin-bottom: 15px;
  border-radius: 8px;
  overflow: hidden;

  img {
    width: 100%;
    vertical-align: middle;
  }

  max-width: 120px;

  @media screen and (min-width: 991px) {
    max-width: 150px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 200px;
  }

  @media screen and (min-width: 1600px) {
    max-width: 250px;
  }
`;
