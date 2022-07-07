import React, { HTMLAttributes } from 'react';

type MediaProps = HTMLAttributes<HTMLImageElement> &
  HTMLAttributes<HTMLVideoElement> & {
    src: string;
    imgProps?: HTMLAttributes<HTMLImageElement>;
    videoProps?: HTMLAttributes<HTMLVideoElement>;
    className?: string;
    srcSuffix?: string;
  };

const Media = ({
  src,
  imgProps,
  videoProps,
  srcSuffix,
  className,
  ...props
}: MediaProps) => {
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

Media.defaultProps = {
  imgProps: {},
  videoProps: {},
  className: '',
  srcSuffix: '',
};

export default Media;
