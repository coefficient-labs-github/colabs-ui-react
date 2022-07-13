import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import defaultTheme from '../../defaultTheme';

type StyledTextProps = HTMLAttributes<HTMLSpanElement> & {
  noWrap?: boolean;
  tag?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';
  size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  weight?: 'light' | 'regular' | 'medium' | 'bold' | 'italic' | 'italicMedium';
  align?: 'left' | 'center' | 'right' | 'inherit' | 'justify';
  gutterBottom?: boolean;
  color?: keyof typeof defaultTheme.color;
  fontFamily?: 'body' | 'title';
};

type TextProps = StyledTextProps & {
  className?: string;
  children:
    | React.ReactElement
    | React.ReactElement[]
    | string
    | string[]
    | number
    | number[];
};

const StyledText = styled.div<StyledTextProps>`
  font-size: ${({ size }) =>
    [10, 12, 14, 16, 20, 24, 34, 48, 60, 96][size - 1]}px;
  letter-spacing: ${({ size }) =>
    [1.5, 0.4, 0.25, 0.5, 0.15, 0, 0.25, 0, -0.5, -1.5][size - 1]};
  margin: 0;
  padding: 0;
  white-space: ${({ noWrap }) => (noWrap ? 'nowrap' : 'initial')};
  margin-bottom: ${({ gutterBottom, size }) =>
    gutterBottom ? `${size * 0.3}rem` : '0'};
  font-family: ${({ theme, weight }) => theme.font.main[weight]};
  color: ${({ color, theme }) => theme.color[color].main};
  text-align: ${({ align }) => align};
`;

const Text = ({ tag, color, children, className, ...props }: TextProps) => {
  return (
    <StyledText
      as={tag}
      color={color}
      className={`cui-text ${className}`}
      {...props}
    >
      {children}
    </StyledText>
  );
};

StyledText.defaultProps = { theme: defaultTheme };

Text.defaultProps = {
  noWrap: false,
  gutterBottom: false,
  color: 'black',
  tag: 'p',
  size: 3,
  weight: 'regular',
  align: 'inherit',
  className: '',
  fontFamily: 'body',
};

export default Text;
