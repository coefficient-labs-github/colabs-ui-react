import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import defaultTheme from '../../defaultTheme';

const StyledText = styled.div`
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
  /* line-height: ${({ size }) => `${size * 0.5}rem`}; */
  margin-bottom: ${({ gutterBottom, size }) =>
    gutterBottom ? `${size * 0.3}rem` : '0'};
  font-family: ${({ theme, weight }) => theme.font.main[weight]};
  color: ${({ color }) => color};
  text-align: ${({ align }) => align};
`;

const Text = ({
  noWrap,
  tag,
  size,
  weight,
  children,
  align,
  gutterBottom,
  color,
  className,
  ...props
}) => {
  return (
    <StyledText
      size={size}
      weight={weight}
      as={tag}
      align={align}
      noWrap={noWrap}
      gutterBottom={gutterBottom}
      className={`cui-text ${className}`}
      color={color}
      {...props}
    >
      {children}
    </StyledText>
  );
};

StyledText.defaultProps = { theme: defaultTheme };

Text.propTypes = {
  noWrap: PropTypes.bool,
  tag: PropTypes.oneOf(['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span']),
  size: PropTypes.number,
  weight: PropTypes.oneOf([
    'light',
    'regular',
    'medium',
    'bold',
    'italicMedium',
  ]),
  align: PropTypes.oneOf(['inherit', 'left', 'center', 'right', 'justify']),
  gutterBottom: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
  color: PropTypes.string,
  className: PropTypes.string,
};

Text.defaultProps = {
  noWrap: false,
  gutterBottom: false,
  color: '',
  tag: 'p',
  size: 3,
  weight: 'regular',
  align: 'inherit',
  className: '',
};

export default Text;
