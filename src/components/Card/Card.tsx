import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import defaultTheme from '../../defaultTheme';

type StyledCardProps = HTMLAttributes<HTMLDivElement> & {
  elevation?: number;
  color?: string;
  variant?: 'primary' | 'secondary';
};

type CardProps = StyledCardProps & {
  children?: React.ReactElement | React.ReactElement[];
  className?: string;
};
const StyledCard = styled.div<StyledCardProps>`
  border-radius: 0.625rem;
  background: ${({ color }) => color || 'white'};
  box-shadow: ${({ elevation, color }) =>
    `${(() => {
      if (elevation === 6) return '0px 11px 15px -7px';
      if (elevation === 5) return '0px 8px 10px -5px';
      if (elevation === 4) return '0px 7px 8px -4px';
      if (elevation === 3) return '0px 5px 5px -3px';
      if (elevation === 2) return '0px 2px 4px -1px';
      if (elevation === 1) return '0px 3px 1px -2px';
      return '0px 0px 0px 0px';
    })()} ${elevation && color ? color : '#00000044'}`};
`;

const Card = ({
  children = null,
  className,
  variant,
  elevation,
  color,
  ...props
}: CardProps) => {
  return (
    <StyledCard
      variant={variant}
      className={`cui-card ${className}`}
      elevation={elevation}
      color={color}
      {...props}
    >
      {children}
    </StyledCard>
  );
};

StyledCard.defaultProps = { theme: defaultTheme };

Card.defaultProps = {
  elevation: null,
  color: null,
  children: null,
  variant: 'secondary',
  className: '',
};

export default Card;
