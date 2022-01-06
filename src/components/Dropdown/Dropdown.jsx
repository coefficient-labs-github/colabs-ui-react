import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import defaultTheme from '../../defaultTheme';

const StyledDropdown = styled.div`
  height: fit-content;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'fit-content')};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 9998;
  :hover {
    cursor: pointer;
    > .select {
      display: block;
      > .option {
        display: flex;
      }
    }
  }
  > .toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #d3d3d3;
    padding: 0 1rem;
    height: ${({ size }) => {
      if (size === 'lg') return '61px';
      if (size === 'md') return '46px';
      if (size === 'sm') return '36px';
      return '36px';
    }};
    border-radius: 0.625rem;
    width: 100%;
    background-color: ${({ variant }) => {
      if (variant === 'primary') return '#1e84fa';
      if (variant === 'secondary') return 'white';
      return '#fff';
    }};
    * {
      ${({ variant }) => {
        if (variant === 'primary') return 'color: #fff; stroke: #fff';
        if (variant === 'secondary') return 'color: #000; stroke: #000';
        return '#000';
      }}
    }
    > * {
      margin: 0 0.25rem;
      white-space: nowrap;
    }
    :hover {
      background-color: ${({ variant }) => {
        if (variant === 'primary') return '#1769C6';
        if (variant === 'secondary') return '#efefef';
        return '#efefef';
      }};
    }
  }
  > .select {
    position: absolute;
    z-index: 9999;
    border: 1px solid #d3d3d3;
    margin: 0;
    top: 100%;
    min-width: fit-content;
    border-radius: 0.625rem;
    width: calc(100% - 0.7rem);
    overflow: hidden;
    animation: growOut 300ms ease-in forwards;
    transform-origin: top center;
    display: none;
    padding: 0.375rem;
    background-color: #fff;
    ${({ theme }) => theme.elevation.sm}
    ${({ align }) => {
      if (align === 'right') return 'right: 0;';
      if (align === 'left') return 'left: 0;';
      return '';
    }}
    &:hover {
      animation: growOut 300ms ease-in forwards;
    }
    > .option {
      display: none;
      min-height: 2.2rem;
      padding: 0 1rem;
      border-radius: 0.625rem;
      margin: 0;
      background-color: #fffffffc;
      color: black;
      text-decoration: none;
      white-space: nowrap;
      backdrop-filter: blur(30px);
      -webkit-backdrop-filter: blur(30px);
      font-size: 16px;
      opacity: 0;
      display: flex;
      align-items: center;
      opacity: 1;
      &:hover {
        background-color: #1e84fa;
        * {
          color: #fff;
          stroke: #fff;
        }
      }
    }
  }

  @keyframes growOut {
    0% {
      transform: scale(1, 0.5);
      opacity: 0;
    }
    80% {
      opacity: 0.5;
    }
    100% {
      transform: scale(1, 1);
      opacity: 1;
    }
  }
`;

const Dropdown = ({
  items,
  toggle,
  chevronShown,
  fullWidth,
  align,
  variant,
  size,
  className,
  ...props
}) => {
  return (
    <StyledDropdown
      className={`cui-dropdown ${className}`}
      fullWidth={fullWidth}
      align={align}
      variant={variant}
      size={size}
      {...props}
    >
      <div className="toggle">
        {toggle}
        {chevronShown && (
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
            className="feather feather-chevron-down"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        )}
      </div>
      <ul className="select">
        {items.map((item, index) => (
          <li key={item?.key || `dropdown-option-${index}`} className="option">
            {item}
          </li>
        ))}
      </ul>
    </StyledDropdown>
  );
};

StyledDropdown.defaultProps = { theme: defaultTheme };

Dropdown.propTypes = {
  chevronShown: PropTypes.bool,
  items: PropTypes.arrayOf(PropTypes.element).isRequired,
  toggle: PropTypes.element.isRequired,
  fullWidth: PropTypes.bool,
  align: PropTypes.oneOf(['left', 'right', 'center']),
  variant: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  className: PropTypes.string,
};

Dropdown.defaultProps = {
  size: 'sm',
  variant: 'secondary',
  align: 'center',
  chevronShown: false,
  fullWidth: false,
  className: '',
};

export default Dropdown;
