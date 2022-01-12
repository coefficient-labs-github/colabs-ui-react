import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Text from '../Text/Text';
import defaultTheme from '../../defaultTheme';

const StyledChip = styled.span`
  border-radius: 5rem;
  margin: 0;
  background-color: ${({ color, variant, theme }) =>
    variant === 'tertiary' ? 'none' : theme.color[color].light}};
  border: 1px solid ${({ color, theme }) => theme.color[color].light};
  padding: ${({ size }) => {
    if (size === 'lg') return '0.25rem 1.45rem';
    if (size === 'md') return '0.2rem 1.2rem';
    return '0.15rem 0.9rem';
  }};
  width: min-content;
  height: min-content;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  > .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 0.5rem 0 0;
    > * {
      ${({ size }) => {
        if (size === 'lg') return 'height: 1.125rem; width: 1.125;';
        if (size === 'md') return 'height: 1rem; width: 1;';
        return 'height: 0.875rem; width: 0.875;';
      }};
    }
  }
  &.right {
    flex-direction: row-reverse;
    > .icon {
      margin: 0 0 0 0.5rem;
    }
  }
  > .chip-label {
    color: ${({ color, theme }) => theme.color[color].main};
  }
`;

const Chip = ({ label, color, icon, iconPos, variant, size, ...props }) => {
  return (
    <StyledChip
      className={`cui-chip ${iconPos === 'right' ? 'right' : 'left'}`}
      variant={variant}
      size={size}
      color={color}
      {...props}
    >
      {icon && <span className="icon">{icon}</span>}
      <Text
        noWrap
        tag="span"
        className="chip-label"
        size={(() => {
          if (size === 'lg') return 3;
          if (size === 'md') return 2;
          return 1;
        })()}
        weight={(() => {
          if (variant === 'primary') return 'medium';
          return 'regular';
        })()}
      >
        {label}
      </Text>
    </StyledChip>
  );
};

StyledChip.defaultProps = { theme: defaultTheme };

Chip.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  color: PropTypes.oneOf(['blue', 'green', 'red', 'purple', 'orange', 'gray']),
  size: PropTypes.oneOf(['lg', 'md', 'sm']),
  label: PropTypes.string.isRequired,
  icon: PropTypes.element,
  iconPos: PropTypes.oneOf(['right', 'left']),
};

Chip.defaultProps = {
  variant: 'primary',
  color: 'gray',
  size: 'md',
  icon: null,
  iconPos: 'left',
};

export default Chip;
