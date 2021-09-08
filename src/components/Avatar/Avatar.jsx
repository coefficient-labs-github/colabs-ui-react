import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledAvatar = styled.div`
  height: ${({ size }) => {
    if (size === 'sm') return '1.75rem';
    if (size === 'md') return '2rem';
    if (size === 'lg') return '3rem';
    return '';
  }};
  width: ${({ size }) => {
    if (size === 'sm') return '1.75rem';
    if (size === 'md') return '2rem';
    if (size === 'lg') return '3rem';
    return '';
  }};
  overflow: hidden;
  border-radius: 1.5rem;
  background-color: #bebebe;
  display: flex;
  align-items: center;
  justify-content: center;
  > svg {
    * {
      fill: none;
      stroke: #fff;
    }
    margin: ${({ size }) => {
      if (size === 'sm') return '0.15rem';
      if (size === 'md') return '0.2rem';
      if (size === 'lg') return '0.3rem';
      return '';
    }};
    height: ${({ size }) => {
      if (size === 'sm') return '1.25rem';
      if (size === 'md') return '2.5rem';
      if (size === 'lg') return '3.5rem';
      return '';
    }};
    width: ${({ size }) => {
      if (size === 'sm') return '1.25rem';
      if (size === 'md') return '2.5rem';
      if (size === 'lg') return '3.5rem';
      return '';
    }};
    fill: white;
  }
  > img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

const Avatar = ({ picture, size, className, ...props }) => {
  const [error, setError] = useState(false);
  return (
    <StyledAvatar size={size} className={`cui-avatar ${className}`} {...props}>
      {picture && !error ? (
        <img alt="avatar" src={picture} onError={() => setError(true)} />
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      )}
    </StyledAvatar>
  );
};

Avatar.propTypes = {
  picture: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  className: PropTypes.string,
};

Avatar.defaultProps = {
  picture: null,
  size: 'md',
  className: '',
};

export default Avatar;
