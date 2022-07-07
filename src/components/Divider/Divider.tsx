import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import defaultTheme from '../../defaultTheme';

type StyledDividerProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: 'primary' | 'secondary';
};

type DividerProps = StyledDividerProps & {
  orOn?: boolean;
  className?: string;
};

const StyledDivider = styled.span<StyledDividerProps>`
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

const Divider = ({ orOn, variant, className, ...props }: DividerProps) => {
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

Divider.defaultProps = {
  orOn: null,
  variant: 'secondary',
  className: '',
};

export default Divider;
