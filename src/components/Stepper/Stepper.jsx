import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Divider from '../Divider/Divider';
import defaultTheme from '../../defaultTheme';

const StyledStepper = styled.div`
  min-height: 2rem;
  display: flex;
  width: 100%;
  margin: auto;
  align-items: center;
  justify-content: space-between;
  position: relative;
  > .cui-divider {
    position: absolute;
    z-index: 1;
  }
  > .step {
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1rem;
    border: 1px solid #a0a0a0;
    &.button {
      :hover {
        cursor: pointer;
      }
    }
    &.numbers {
      width: 2rem;
      height: 2rem;
      background: white;
    }
    &.lines {
      width: 100%;
      height: 0.5rem;
      margin: 0 0.4rem !important;
      &:nth-child(1) {
        margin-left: 0 !important;
      }
      &:nth-last-child() {
        margin-right: 0 !important;
      }
    }
    &.dots {
      height: 0.5rem;
      width: 0.5rem;
    }
    &.seen {
      background: ${({ theme }) => theme.color.primary.main};
      color: white;
      border-color: #1171fa;
    }
  }
`;

const Stepper = ({
  steps,
  activeStepIndex,
  variant,
  className,
  onStepClick,
  ...props
}) => {
  return (
    <StyledStepper className={`cui-stepper ${className}`} {...props}>
      {variant === 'numbers' && <Divider />}
      {steps
        .map((step, index) => ({ ...step, index }))
        .filter(({ hidden }) => !hidden)
        .map(({ label, index }) => (
          <div
            key={index}
            className={`step ${variant} ${
              activeStepIndex >= index ? 'seen' : ''
            }
              ${onStepClick ? 'button' : ''}
            `}
            role="button"
            tabIndex={0}
            onKeyDown={() => false}
            onClick={() => onStepClick(index)}
          >
            {variant === 'numbers' &&
              (activeStepIndex > index ? <span /> : label)}
          </div>
        ))}
    </StyledStepper>
  );
};

StyledStepper.defaultProps = { theme: defaultTheme };

Stepper.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  className: PropTypes.string,
  activeStepIndex: PropTypes.number,
  onStepClick: PropTypes.func,
  variant: PropTypes.oneOf(['numbers', 'lines', 'dots']),
};

Stepper.defaultProps = {
  className: '',
  activeStepIndex: -1,
  onStepClick: null,
  variant: 'numbers',
};

export default Stepper;
