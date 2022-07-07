import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import defaultTheme from '../../defaultTheme';

type StyledTextProps = HTMLAttributes<HTMLSpanElement> & {
  noWrap?: boolean;
  tag?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';
  size?: number;
  weight?: 'light' | 'regular' | 'medium' | 'bold' | 'italic' | 'italicMedium';
  align?: 'left' | 'center' | 'right' | 'inherit' | 'justify';
  gutterBottom?: boolean;
  color?: string;
  fontFamily?: 'body' | 'title';
};

type TextProps = StyledTextProps & {
  className?: string;
  children: React.ReactElement | React.ReactElement[] | string;
};

const StyledText = styled.div<StyledTextProps>`
  font-size: ${({ size }) => {
    if (size === 1) return '0.75rem';
    if (size === 2) return '0.875rem';
    if (size === 3) return '1rem';
    if (size === 4) return '1.125rem';
    if (size === 5) return '1.5rem';
    if (size === 6) return '2rem';
    if (size === 7) return '3rem';
    if (size === 8) return '4.5rem';
    return '';
  }};
  margin: 0;
  padding: 0;
  white-space: ${({ noWrap }) => (noWrap ? 'nowrap' : 'initial')};
  margin-bottom: ${({ gutterBottom, size }) =>
    gutterBottom ? `${size * 0.3}rem` : '0'};
  font-family: ${({ theme, weight }) => theme.font.main[weight]};
  color: ${({ color }) => color};
  text-align: ${({ align }) => align};
`;

const Text = ({ tag, children, className, ...props }: TextProps) => {
  return (
    <StyledText as={tag} className={`cui-text ${className}`} {...props}>
      {children}
    </StyledText>
  );
};

StyledText.defaultProps = { theme: defaultTheme };

Text.defaultProps = {
  noWrap: false,
  gutterBottom: false,
  color: '',
  tag: 'p',
  size: 3,
  weight: 'regular',
  align: 'inherit',
  className: '',
  fontFamily: 'body',
};

export default Text;
