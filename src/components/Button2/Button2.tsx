import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import Text from '../Text/Text';
import defaultTheme from '../../defaultTheme';

type StyledButtonProps = HTMLAttributes<HTMLButtonElement> & {
  variantIndex: 1 | 2 | 3;
  fullWidth?: boolean;
  sizeIndex: 1 | 2 | 3 | 4 | 5;
  color?: keyof typeof defaultTheme.color;
  iconPos?: 'right' | 'left';
  hasIcon: boolean;
  hasText: boolean;
};

type ButtonProps = StyledButtonProps & {
  variant?: 'primary' | 'secondary' | 'tertiary';
  text?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  icon?: React.ReactElement;
  disabled?: boolean;
  className?: string;
};

const StyledButton = styled.button<StyledButtonProps>`
  display: grid;
  grid-template-columns: repeat(
    ${({ hasIcon, hasText }) => [hasIcon, hasText].filter((v) => v).length},
    auto
  );
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  grid-gap: ${({ sizeIndex }) =>
    [0.25, 0.375, 0.5, 0.625, 0.875][sizeIndex - 1]}rem;
  align-items: center;
  justify-items: center;
  height: ${({ sizeIndex }) => [20, 24, 34, 48, 60][sizeIndex - 1]}px;
  width: ${({ sizeIndex, hasText }) =>
    hasText ? 'initial' : `${[20, 24, 34, 48, 60][sizeIndex - 1]}px`};
  border-radius: ${({ sizeIndex }) =>
    [0.375, 0.5, 0.625, 0.625, 0.875][sizeIndex - 1]}rem;
  border: 1px solid
    ${({ theme, variantIndex, color }) =>
      ['#ffffff00', theme.color[color].main, '#ffffff00'][variantIndex - 1]};
  padding: 0
    ${({ sizeIndex, hasText }) =>
      hasText ? `${[0.5, 0.625, 0.75, 0.875, 1][sizeIndex - 1]}rem` : '0'};
  background-color: ${({ theme, variantIndex, color }) =>
    [theme.color[color].main, theme.color[color].light, '#ffffff00'][
      variantIndex - 1
    ]};
  > * {
    grid-row-start: 1;
  }
  > .icon {
    display: flex;
    grid-column-start: ${({ iconPos, hasIcon, hasText }) =>
      iconPos === 'right' && hasIcon && hasText ? 2 : 1};
    height: ${({ sizeIndex }) =>
      [0.5, 0.625, 0.75, 0.875, 1][sizeIndex - 1]}rem;
    width: ${({ sizeIndex }) => [0.5, 0.625, 0.75, 0.875, 1][sizeIndex - 1]}rem;
    fill: ${({ theme, variantIndex, color }) =>
      ['white', theme.color[color].main, theme.color[color].main][
        variantIndex - 1
      ]};
  }
  &:not(.disabled) {
    :hover {
      box-shadow: 0px 3px 4px #00000029;
      filter: brightness(0.97);
      cursor: pointer;
    }
    :active {
      box-shadow: initial;
    }
  }
`;

const Button = ({
  text,
  icon,
  variant,
  iconPos,
  color,
  fullWidth,
  disabled,
  size,
  className,
  ...props
}: ButtonProps) => {
  const sizeIndex = { xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }[size];
  const variantIndex = { primary: 1, secondary: 2, tertiary: 3 }[variant];
  return (
    <StyledButton
      variantIndex={variantIndex}
      fullWidth={fullWidth}
      sizeIndex={sizeIndex}
      color={color}
      iconPos={iconPos}
      disabled={disabled}
      hasIcon={!!icon}
      hasText={!!text}
      className={`cui-button ${disabled ? 'disabled' : ''} ${className}`}
      {...props}
    >
      {icon && <span className="icon">{icon}</span>}
      {text && (
        <Text
          tag="span"
          color={variant === 'primary' ? 'white' : color}
          size={sizeIndex as 1 | 2 | 3 | 4 | 5}
          className="text"
        >
          {text}
        </Text>
      )}
    </StyledButton>
  );
};

StyledButton.defaultProps = { theme: defaultTheme };

Button.defaultProps = {
  disabled: false,
  variant: 'primary',
  size: 'md',
  text: null,
  icon: null,
  color: 'blue',
  iconPos: 'left',
  fullWidth: false,
  className: '',
};

export default Button;
