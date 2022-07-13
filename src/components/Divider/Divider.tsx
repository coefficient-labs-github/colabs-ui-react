import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import defaultTheme from '../../defaultTheme';

type StyledDividerProps = HTMLAttributes<HTMLHRElement> & {
  px?: 1 | 2 | 3;
  color?: keyof typeof defaultTheme.color;
};

type DividerProps = StyledDividerProps & {
  className?: string;
};

const StyledDivider = styled.hr<StyledDividerProps>`
  height: ${({ px }) => px}px;
  width: 100%;
  margin: 0;
  border: 0;
  background: ${({ theme, color }) => theme.color[color].main}88;
`;

const Divider = ({ px, className, color, ...props }: DividerProps) => {
  return (
    <StyledDivider
      className={`cui-divider ${className}`}
      px={px}
      color={color}
      {...props}
    />
  );
};

StyledDivider.defaultProps = { theme: defaultTheme };

Divider.defaultProps = {
  className: '',
  px: 1,
  color: 'black',
};

export default Divider;
