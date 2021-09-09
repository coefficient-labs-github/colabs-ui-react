import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Text from '../Text/Text';

const StyledChip = styled.span`
  border-radius: 100px;
  border: 1px solid
    ${({ variant }) => (variant === 'primary' ? '#FB4D9D' : '#CCCCCC')};
  padding: ${({ size }) =>
    size === 'sm' ? '0.2rem 0.6rem' : '0.25rem 0.75rem'};
  width: min-content;
  display: inline-flex;
  flex-direction: row;
  > .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 0.5rem 0 0;
    > * {
      ${({ size }) => {
        if (size === 'md') return 'height: 1.25rem; width: 1.25;';
        return 'height: 1.125rem; width: 1.125;';
      }};
    }
  }
  &.right {
    flex-direction: row-reverse;
    > .icon {
      margin: 0 0 0 0.5rem;
    }
  }
`;

const Chip = ({ label, icon, iconPos, variant, size, ...props }) => {
  return (
    <StyledChip
      className={`cui-chip ${iconPos === 'right' ? 'right' : 'left'}`}
      variant={variant}
      size={size}
      {...props}
    >
      {icon && <span className="icon">{icon}</span>}
      <Text noWrap tag="span" size={size === 'sm' ? 2 : 3}>
        {label}
      </Text>
    </StyledChip>
  );
};

Chip.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['md', 'sm']),
  label: PropTypes.string.isRequired,
  icon: PropTypes.element,
  iconPos: PropTypes.oneOf(['right', 'left']),
};

Chip.defaultProps = {
  variant: 'secondary',
  size: 'md',
  icon: null,
  iconPos: 'left',
};

export default Chip;
