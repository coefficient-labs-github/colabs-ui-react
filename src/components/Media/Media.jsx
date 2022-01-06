import React from 'react';
import PropTypes from 'prop-types';

const Media = ({
  src,
  imgProps,
  videoProps,
  srcSuffix,
  className,
  ...props
}) => {
  if (!src || src.match(/\.(jpeg|jpg|gif|png|webp)$/) != null) {
    return (
      // eslint-disable-next-line jsx-a11y/alt-text
      <img
        className={`cui-media ${className}`}
        src={`${src}${srcSuffix}`}
        {...imgProps}
        {...props}
      />
    );
  }
  if (src.match(/\.(mp4|mpeg|webm|mov)$/) != null) {
    return (
      <video
        className={`cui-media ${className}`}
        muted
        src={`${src}${srcSuffix}`}
        {...videoProps}
        {...props}
      />
    );
  }
  return <div />;
};

Media.propTypes = {
  src: PropTypes.string.isRequired,
  imgProps: PropTypes.shape(),
  videoProps: PropTypes.shape(),
  className: PropTypes.string,
  srcSuffix: PropTypes.string,
};

Media.defaultProps = {
  imgProps: '',
  videoProps: '',
  className: '',
  srcSuffix: '',
};

export default Media;
