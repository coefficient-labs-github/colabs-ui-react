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
  /* line-height: ${({ size }) => `${size * 0.5}rem`}; */
  margin-bottom: ${({ gutterBottom, size }) =>
    gutterBottom ? `${size * 0.3}rem` : '0'};
  font-family: ${({ theme, weight }) => theme.font.main[weight]};
  color: ${({ color }) => color};
  text-align: ${({ align }) => align};
`;

const Text = ({ tag, size, weight, children, align, gutterBottom, color }) => {
  return (
    <StyledText
      size={size}
      weight={weight}
      as={tag}
      align={align}
      gutterBottom={gutterBottom}
      className="cui-text"
      color={color}
    >
      {children}
    </StyledText>
  );
};

StyledText.defaultProps = { theme: defaultTheme };

Text.propTypes = {
  tag: PropTypes.oneOf(['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  size: PropTypes.number,
  weight: PropTypes.oneOf(['light', 'regular', 'medium', 'bold']),
  align: PropTypes.oneOf(['inherit', 'left', 'center', 'right', 'justify']),
  gutterBottom: PropTypes.bool,
  children: PropTypes.string.isRequired,
  color: PropTypes.string,
};

Text.defaultProps = {
  gutterBottom: false,
  color: '',
  tag: 'p',
  size: 3,
  weight: 'regular',
  align: 'inherit',
};

export default Text;
