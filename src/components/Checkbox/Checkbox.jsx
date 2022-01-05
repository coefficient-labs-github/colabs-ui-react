import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledCheckbox = styled.div`
  display: flex;
  align-items: center;
  > .wrapper {
    position: relative;
    height: 1.2rem;
    width: 1.2rem;
    margin-right: 0.75rem;
    > input {
      position: absolute;
      height: 1.2rem;
      width: 1.2rem;
      opacity: 0;
      cursor: pointer;
    }
    > .container {
      position: absolute;
      background-color: #fff;
      border: 1px solid #d3d3d3;
      display: flex;
      align-items: center;
      justify-content: center;
      &.checkbox {
        border-radius: 0.25rem;
        top: 0.025;
        left: 0.025;
        height: 1.15rem;
        width: 1.15rem;
        > .checkedStatus {
          color: #fff;
          stroke-width: 3px;
          height: 90%;
          width: 90%;
          opacity: 0;
        }
        &.active {
          background-color: #1171fa;
          > .checkedStatus {
            opacity: 1;
          }
        }
      }
      &.radio {
        top: 0.1rem;
        left: 0.1rem;
        height: 1rem;
        width: 1rem;
        border-radius: 0.5rem;
        > .checkedStatus {
          border-radius: 0.5rem;
          /* transition: all 0.1s ease-in-out 0.1s; */
          background-color: #fff;
          height: 80%;
          width: 80%;
        }
        &.active {
          > .checkedStatus {
            background-color: #1171fa;
          }
        }
      }
    }
  }
  > label {
    font-size: 1rem;
  }
`;

const Checkbox = ({ label, checked, onChange, type, className, ...props }) => {
  const uniqueId = Math.random();

  return (
    <StyledCheckbox className={`cui-checkbox ${className}`}>
      <div className="wrapper">
        <div className={`container ${type} ${checked ? 'active' : ''}`}>
          {type === 'radio' ? (
            <span className="checkedStatus" />
          ) : (
            <svg
              className="checkedStatus"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          )}
        </div>
        <input
          checked={checked}
          type={type}
          id={uniqueId}
          onChange={onChange}
          {...props}
        />
      </div>
      <label htmlFor={uniqueId} className="label">
        {label}
      </label>
    </StyledCheckbox>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  checked: PropTypes.bool,
  type: PropTypes.oneOf(['checkbox', 'radio']),
  onChange: PropTypes.func.isRequired,
};

Checkbox.defaultProps = {
  label: '',
  className: '',
  type: 'checkbox',
  checked: false,
};

export default Checkbox;
