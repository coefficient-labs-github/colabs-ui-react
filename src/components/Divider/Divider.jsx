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
            ${theme.color.primary.main},
            ${theme.color.secondary.main}
          );`
        : 'lightgray'};
  }
  > span {
    margin: 0 1rem;
    font-family: ${({ theme }) => theme.font.main.regular};
  }
`;

const Divider = ({ orOn, variant }) => {
  return (
    <StyledDivider variant={variant} className="cui-divider">
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
};

Divider.defaultProps = {
  orOn: null,
  variant: 'secondary',
};

export default Divider;
