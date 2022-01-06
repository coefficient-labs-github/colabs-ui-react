/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import Text from '../Text/Text';
import defaultTheme from '../../defaultTheme';

const StyledTextField = styled.div`
  z-index: 1;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  > label {
    font-family: ${({ theme }) => theme.font.main.light};
    font-size: 0.875rem;
    color: ${({ disabled }) => (disabled ? '#b6b6b6' : '#000')};
  }
  > .container {
    margin: 0 auto;
    padding: 0 1rem;
    /* width: 100%; */
    border-radius: 0.625rem;
    border: 1px solid
      ${({ elevated, disabled }) => {
        if (elevated) return '#ffffff00';
        if (disabled) return '#e6e6e6';
        return '#d3d3d3';
      }};
    display: grid;
    grid-template-columns: min-content 1fr min-content;
    align-items: center;
    overflow: hidden;
    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: ${({ elevated }) =>
      elevated ? '0px 3px 4px #0000001C' : '#ffffff00'};
    ${({ multiline }) => (multiline ? '' : 'height: 2.75rem')};
    &:hover {
      ${({ disabled }) =>
        disabled ? '' : 'background: #f9f9f9 0% 0% no-repeat padding-box;'};
    }
    &.focused {
      border: 1px solid #6da7fd;
    }
    > .icon {
      height: 1rem;
      width: 1rem;
      grid-column: 3 / 4;
      padding: 0;
      margin: 0 0 0 0.5rem;
      grid-row: 1 / 2;
      &.left {
        grid-column: 1 / 2;
        margin: 0 0.5rem 0 0;
      }
    }
    > .input {
      flex: 1;
      width: 100%;
      grid-column: 2 / 3;
      grid-row: 1 / 2;
      height: ${({ multiline }) => (multiline ? 'fit-content' : '100%')};
      margin: ${({ multiline }) => (multiline ? '1rem 0' : '0')};
      resize: none;
      border: 0;
      background: #ffffff00;
      color: #000;
      font-family: ${({ theme }) => theme.font.main.regular};
      font-size: 1rem;
      letter-spacing: -0.02em;
      ::-webkit-scrollbar {
        width: 6px;
      }
      ::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.color.primary.main};
      }
      ::-webkit-scrollbar-track {
        background-color: #f5f5f5;
      }
      :focus {
        outline: none;
      }
    }
    > .bottomActions {
      display: flex;
      justify-content: right;
      margin-bottom: 1rem;
      grid-row: 2 / 3;
      grid-column: 1 / 4;
    }
  }
`;

const TextField = ({
  placeholder,
  fullWidth,
  backgroundColor,
  icon,
  iconPos,
  label,
  rows,
  onFocus,
  onBlur,
  disabled,
  autoComplete,
  inputTag,
  error,
  helperText,
  elevated,
  className,
  bottomActions,
  style,
  ...props
}) => {
  const InputTag = inputTag === 'number' ? NumberFormat : inputTag;
  const uniqueId = Math.random();
  const [isFocus, setIsFocus] = useState();

  return (
    <StyledTextField
      className={`cui-textfield ${className}`}
      multiline={inputTag === 'textarea'}
      rows={rows}
      disabled={disabled}
      error={error}
      elevated={elevated}
      fullWidth={fullWidth}
      style={style}
    >
      {label && (
        <label htmlFor={uniqueId}>
          <Text tag="span" size={2}>
            {label}
          </Text>
        </label>
      )}
      <span
        className={`container ${isFocus ? 'focused' : ''}`}
        style={{ backgroundColor }}
      >
        {icon && <span className={`icon ${iconPos}`}>{icon}</span>}
        {disabled ? (
          <Text color="#b6b6b6">{placeholder}</Text>
        ) : (
          <InputTag
            onFocus={() => {
              setIsFocus(true);
              onFocus();
            }}
            onBlur={() => {
              setIsFocus(false);
              onBlur();
            }}
            className="input"
            id={uniqueId}
            placeholder={placeholder}
            rows={rows}
            autoComplete={autoComplete?.toString()}
            {...props}
          />
        )}
        {bottomActions && <div className="bottomActions">{bottomActions}</div>}
      </span>
      {helperText && (
        <Text
          tag="span"
          size={2}
          color={(() => {
            if (error) return 'red';
            if (disabled) return '#b6b6b6';
            return '#000';
          })()}
        >
          {helperText}
        </Text>
      )}
    </StyledTextField>
  );
};

StyledTextField.defaultProps = { theme: defaultTheme };

TextField.propTypes = {
  ...NumberFormat.propTypes,
  iconPos: PropTypes.oneOf(['right', 'left']),
  placeholder: PropTypes.string,
  icon: PropTypes.element,
  label: PropTypes.string,
  elevated: PropTypes.bool,
  rows: PropTypes.number,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  autoComplete: PropTypes.bool,
  inputTag: PropTypes.string,
  style: PropTypes.shape(),
  backgroundColor: PropTypes.string,
  className: PropTypes.string,
  bottomActions: PropTypes.element,
  fullWidth: PropTypes.bool,
};

TextField.defaultProps = {
  onFocus: () => null,
  onBlur: () => null,
  backgroundColor: 'white',
  style: {},
  autoComplete: false,
  placeholder: '',
  rows: 2,
  icon: null,
  elevated: false,
  iconPos: 'left',
  label: null,
  inputTag: 'input',
  className: '',
  bottomActions: null,
  fullWidth: false,
};

export default TextField;
