import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import defaultTheme from '../../defaultTheme';

const StyledButton = styled.button`
  position: relative;
  border: 0;
  cursor: pointer;
  height: 100%;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.625rem;
  font-family: ${({ theme }) => theme.font.main.regular};
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'fit-content')};
  flex-direction: ${({ iconPos }) =>
    iconPos === 'left' ? 'row' : 'row-reverse'};
  background: ${({ variant }) => {
    if (variant === 'tertiary') return '#ffffff00';
    if (variant === 'secondary') return '#ffffff';
    return '-webkit-linear-gradient(90deg, #1E84FA, #41B5FC)';
  }};
  color: ${({ variant }) => {
    if (variant === 'tertiary') return 'black';
    if (variant === 'secondary') return 'black';
    return 'white';
  }};
  border: 1px solid
    ${({ variant }) => {
      if (variant === 'tertiary') return '#ffffff00';
      if (variant === 'secondary') return '#d3d3d3';
      return '#ffffff00';
    }};
  height: ${({ size }) => {
    if (size === 'lg') return '3.5rem';
    if (size === 'md') return '2.625rem';
    return '2rem';
  }};
  font-size: ${({ size }) => {
    if (size === 'lg') return '1.5rem';
    if (size === 'md') return '1.125rem';
    return '1rem';
  }};
  padding: ${({ size, iconOnly }) => {
    if (iconOnly) return '0';
    if (size === 'lg') return '0 3rem';
    if (size === 'md') return '0 2.5rem';
    return '0 2rem';
  }};
  > .icon {
    // need to fix margin:
    margin-right: 0.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    left: 0.5rem;
    > * {
      stroke: ${({ variant }) => {
        if (variant === 'tertiary') return 'black';
        if (variant === 'secondary') return 'black';
        return 'white';
      }};
      ${({ size }) => {
        if (size === 'lg') return 'height: 1.5rem; width: 1.5;';
        if (size === 'md') return 'height: 1.25rem; width: 1.25;';
        return 'height: 1.125rem; width: 1.125;';
      }};
    }
  }
  > .text {
    width: fit-content;
  }
  &.disabled {
    ${({ variant }) => (variant === 'primary' ? 'background: #cecece;' : '')}
    color: #868686;
    :focus {
      outline: none;
    }
    > .icon {
      stroke: #a6a6a6;
    }
  }
  &:not(.disabled) {
    &:hover {
      background: ${({ variant }) => {
        if (['tertiary', 'secondary'].includes(variant)) return '#f9f9f9';
        return '-webkit-linear-gradient(90deg, #1E84FA, #41B5FC)';
      }};
      border: 1px solid
        ${({ variant }) => {
          if (variant === 'tertiary') return '#ffffff00';
          if (variant === 'secondary') return '#d3d3d3';
          return '#ffffff00';
        }};
      box-shadow: 0px 3px 4px #00000016;
    }
    &:focus {
      outline: none;
      box-shadow: ${({ variant }) => {
        if (variant === 'secondary') return '0px 0px 3px #00000016;';
        if (variant === 'primary') return '0px 0px 5px #1171ff;';
        return '0';
      }};
      background: ${({ variant }) => {
        if (['tertiary', 'secondary'].includes(variant)) return '#f9f9f9';
        return '-webkit-linear-gradient(90deg, #1E84FA, #41B5FC)';
      }};
      border: 1px solid
        ${({ variant }) => {
          if (variant === 'tertiary') return '#ffffff00';
          if (variant === 'secondary') return '#b1b1b1';
          return '#0B6EFF';
        }};
    }
    &:active {
      box-shadow: ${({ variant }) => {
        if (variant === 'primary') return '0px 0px 3px #00000029;';
        return '0';
      }};
      background: ${({ variant }) => {
        if (variant === 'primary')
          return '-webkit-linear-gradient(90deg, #1E84FA, #2E9BFB)';
        if (['tertiary', 'secondary'].includes(variant)) return '#f1f1f1';
        return '-webkit-linear-gradient(90deg, #1E84FA, #41B5FC)';
      }};
      border: 1px solid
        ${({ variant }) => {
          if (variant === 'secondary') return '#d3d3d3';
          return '#ffffff00';
        }};
    }
  }
`;

const Button = ({
  text,
  icon,
  onClick,
  variant,
  iconPos,
  fullWidth,
  disabled,
  size,
  type,
}) => {
  return (
    <StyledButton
      onClick={disabled ? null : onClick}
      variant={variant}
      iconPos={iconPos}
      fullWidth={fullWidth}
      size={size}
      className={`cui-button ${disabled ? 'disabled' : ''} ${
        text ? '' : 'iconOnly'
      }`}
      type={type}
    >
      <span className="icon">{icon}</span>
      <span className="text">{text}</span>
    </StyledButton>
  );
};

StyledButton.defaultProps = { theme: defaultTheme };

Button.propTypes = {
  text: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  iconPos: PropTypes.oneOf(['right', 'left']),
  size: PropTypes.oneOf(['lg', 'md', 'sm']),
  icon: PropTypes.element,
  onClick: PropTypes.func,
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  type: PropTypes.string,
};

Button.defaultProps = {
  onClick: null,
  type: null,
  disabled: false,
  variant: 'primary',
  size: 'sm',
  text: null,
  icon: null,
  iconPos: 'left',
  fullWidth: false,
};

export default Button;
