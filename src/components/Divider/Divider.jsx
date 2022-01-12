import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import defaultTheme from '../../defaultTheme';

const StyledDivider = styled.span`
  display: flex;
  align-items: center;
  width: 100%;
  > hr {
    height: ${({ variant }) => (variant === 'primary' ? '2px' : '1px')};
    width: 100%;
    margin: 0;
    border: 0;
    background: ${({ variant, theme }) =>
      variant === 'primary'
        ? `-webkit-linear-gradient(
            0deg,
            ${theme.color.blue.main},
            #60E2FD
          );`
        : 'lightgray'};
  }
  > span {
    margin: 0 1rem;
    font-family: ${({ theme }) => theme.font.main.regular};
  }
`;

const Divider = ({ orOn, variant, className, ...props }) => {
  return (
    <StyledDivider
      variant={variant}
      className={`cui-divider ${className}`}
      {...props}
    >
      <hr />
      {orOn ? (
        <>
          <span>Or</span>
          <hr />
        </>
      ) : null}
    </StyledDivider>
  );
};

StyledDivider.defaultProps = { theme: defaultTheme };

Divider.propTypes = {
  orOn: PropTypes.bool,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  className: PropTypes.string,
};

Divider.defaultProps = {
  orOn: null,
  variant: 'secondary',
  className: '',
};

export default Divider;
