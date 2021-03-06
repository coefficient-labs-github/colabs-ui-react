import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import defaultTheme from '../../defaultTheme';

type StyledButtonProps = HTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'tertiary';
  fullWidth?: boolean;
  onClick?(...args: unknown[]): unknown;
  elevated?: boolean;
  size?: 'lg' | 'md' | 'sm';
  iconPos?: 'right' | 'left';
};

type ButtonProps = StyledButtonProps & {
  text?: string;
  icon?: React.ReactElement;
  disabled?: boolean;
  className?: string;
};

const StyledButton = styled.button<StyledButtonProps>`
  position: relative;
  border: 0;
  cursor: pointer;
  box-sizing: border-box;
  height: 100%;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.625rem;
  font-family: ${({ theme }) => theme.font.main.regular};
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'fit-content')};
  box-shadow: ${({ variant, elevated }) => {
    if (variant === 'tertiary') return '0';
    if (elevated) return '0px 3px 4px #00000029;';
    return '0';
  }};
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
    ${({ variant, elevated }) => {
      if (elevated) return '#ffffff00';
      if (variant === 'tertiary') return '#ffffff00';
      if (variant === 'secondary') return '#d3d3d3';
      return '#ffffff00';
    }};
  height: fit-content;
  &:not(.iconOnly) {
    padding: ${({ size }) => {
      if (size === 'lg') return '1rem 1.5rem';
      if (size === 'md') return '0.75rem 1.125rem';
      if (size === 'sm') return '0.5rem 1rem';
      return '0.5rem 1.5rem';
    }};
  }
  // need to fix:
  &.iconOnly {
    padding: ${({ size }) => {
      if (size === 'lg') return '1rem';
      if (size === 'md') return '0.75rem';
      if (size === 'sm') return '0.5rem';
      return '0.5rem';
    }};
  }
  &.disabled {
    ${({ variant }) => (variant === 'primary' ? 'background: #cecece;' : '')}
    color: #868686;
    box-shadow: ${({ variant, elevated }) => {
      if (variant === 'tertiary') return '0';
      if (elevated) return '0px 1px 3px #00000029;';
      return '0';
    }};
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
        ${({ variant, elevated }) => {
          if (elevated) return '#ffffff00';
          if (variant === 'tertiary') return '#ffffff00';
          if (variant === 'secondary') return '#d3d3d3';
          return '#ffffff00';
        }};
      box-shadow: ${({ variant, elevated }) => {
        if (variant === 'tertiary') return '0';
        if (elevated) return '0px 4px 6px #00000029';
        if (variant === 'primary') return '0px 3px 4px #00000016;';
        return '0';
      }};
    }
    &:focus {
      outline: none;
      box-shadow: ${({ variant, elevated }) => {
        if (variant === 'secondary') {
          if (elevated) return '0px 4px 6px #00000029;';
          return '0px 0px 3px #00000016;';
        }
        if (variant === 'primary') return '0px 0px 5px #1171ff;';
        if (variant === 'tertiary' && elevated) return '0px 0px 3px #00000029;';
        return '0';
      }};
      background: ${({ variant }) => {
        if (['tertiary', 'secondary'].includes(variant)) return '#f9f9f9';
        return '-webkit-linear-gradient(90deg, #1E84FA, #41B5FC)';
      }};
      border: 1px solid
        ${({ variant, elevated }) => {
          if (elevated) return '#ffffff00';
          if (variant === 'tertiary') return '#ffffff00';
          if (variant === 'secondary') return '#b1b1b1';
          return '#0B6EFF';
        }};
    }
    &:active {
      box-shadow: ${({ variant, elevated }) => {
        if (variant === 'primary') return '0px 0px 3px #00000029;';
        if (variant === 'secondary' && elevated)
          return '0px 1px 3px ##0000001C;';
        return '0';
      }};
      background: ${({ variant }) => {
        if (variant === 'primary')
          return '-webkit-linear-gradient(90deg, #1E84FA, #2E9BFB)';
        if (['tertiary', 'secondary'].includes(variant)) return '#f1f1f1';
        return '-webkit-linear-gradient(90deg, #1E84FA, #41B5FC)';
      }};
      border: 1px solid
        ${({ variant, elevated }) => {
          if (elevated) return '#ffffff00';
          if (variant === 'secondary') return '#d3d3d3';
          return '#ffffff00';
        }};
    }
  }
  // need to refactor from here
  &.right {
    flex-direction: row-reverse;
    > .icon {
      margin-left: ${({ size }) => {
        if (size === 'lg') return '1rem';
        if (size === 'md') return '0.75rem';
        return '0.5rem';
      }};
      ${({ iconPos }) =>
        iconPos === 'left' ? '0 0.25rem 0 0' : '0 0 0 0.25rem'};
    }
  }
  &:not(.right) {
    flex-direction: row;
    > .icon {
      margin-right: ${({ size }) => {
        if (size === 'lg') return '1rem';
        if (size === 'md') return '0.75rem';
        return '0.5rem';
      }};
      ${({ iconPos }) =>
        iconPos === 'left' ? '0 0.25rem 0 0' : '0 0 0 0.25rem'};
    }
  }
  &.iconOnly {
    > .icon {
      margin: 0;
    }
  }
  // to here
  > .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    left: 0.5rem;
    > * {
      ${({ size }) => {
        if (size === 'lg') return 'height: 1.5rem; width: 1.5;';
        if (size === 'md') return 'height: 1.25rem; width: 1.25;';
        return 'height: 1.125rem; width: 1.125;';
      }};
    }
  }
  > .text {
    width: fit-content;
    font-size: ${({ size }) => {
      if (size === 'lg') return '1.5rem';
      if (size === 'md') return '1.125rem';
      return '1rem';
    }};
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
  elevated,
  className,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton
      onClick={disabled ? null : onClick}
      variant={variant}
      fullWidth={fullWidth}
      size={size}
      elevated={elevated}
      className={`cui-button ${disabled ? 'disabled' : ''} ${
        icon && !text ? 'iconOnly' : ''
      } ${iconPos === 'right' ? 'right' : 'left'} ${
        elevated ? 'elevated' : ''
      }${className}`}
      {...props}
    >
      {icon && <span className="icon">{icon}</span>}
      {text && <span className="text">{text}</span>}
    </StyledButton>
  );
};

StyledButton.defaultProps = { theme: defaultTheme };

Button.defaultProps = {
  onClick: null,
  disabled: false,
  elevated: false,
  variant: 'primary',
  size: 'sm',
  text: null,
  icon: null,
  iconPos: 'left',
  fullWidth: false,
  className: '',
};

export default Button;
