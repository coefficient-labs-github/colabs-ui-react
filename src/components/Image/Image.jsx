import React, { useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import defaultFallback from '../../../assets/BlueImage.png';

const StyledImage = styled.img``;

const Image = ({ src, fallbackSrc, className, onError, ...props }) => {
  const imgRef = useRef();

  function handleError(e) {
    e.target.src = fallbackSrc;
    imgRef.current.style = 'object-fit: contain !important';
    onError(e);
  }

  return (
    <StyledImage
      className={`cui-image ${className}`}
      onError={handleError}
      src={src}
      ref={imgRef}
      {...props}
    />
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  fallbackSrc: PropTypes.string,
  className: PropTypes.string,
  onError: PropTypes.func,
};

Image.defaultProps = {
  fallbackSrc: defaultFallback,
  onError: () => {},
  className: '',
};

export default Image;
