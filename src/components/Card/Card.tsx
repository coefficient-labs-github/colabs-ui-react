import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import defaultTheme from '../../defaultTheme';

type StyledCardProps = HTMLAttributes<HTMLDivElement> & {
  elevation?: 1 | 2 | 3 | 4 | 5 | 6;
  color?: keyof typeof defaultTheme.color;
};

type CardProps = StyledCardProps & {
  children?: React.ReactElement | React.ReactElement[];
  className?: string;
};
const StyledCard = styled.div<StyledCardProps>`
  border-radius: 0.625rem;
  background: ${({ color, theme }) => theme.color[color]?.main};
  box-shadow: ${({ elevation, color, theme }) =>
    `${
      [
        '0px 0px 0px 0px',
        '0px 3px 1px -2px',
        '0px 2px 4px -1px',
        '0px 5px 5px -3px',
        '0px 7px 8px -4px',
        '0px 8px 10px -5px',
        '0px 11px 15px -7px',
      ][elevation]
    } ${color === 'white' ? '#666666' : theme.color[color]?.main}88`};
`;

const Card = ({
  children = null,
  className,
  elevation,
  color,
  ...props
}: CardProps) => {
  return (
    <StyledCard
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
  elevation: 0,
  color: 'white',
  children: null,
  className: '',
};

export default Card;
