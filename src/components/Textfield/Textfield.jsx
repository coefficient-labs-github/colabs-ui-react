/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import Text from '../Text/Text';
import defaultTheme from '../../defaultTheme';

const StyledTextField = styled.div`
  z-index: 1;
  > label {
    font-family: ${({ theme }) => theme.font.main.light};
    font-size: 0.875rem;
    color: ${({ disabled }) => (disabled ? '#b6b6b6' : '#000')};
  }
  > .container {
    margin: 0 auto;
    padding: 0 1rem;
    width: 100%;
    background: white;
    border-radius: 0.625rem;
    border: 1px solid
      ${({ elevated, disabled }) => {
        if (elevated) return '#ffffff00';
        if (disabled) return '#e6e6e6';
        return '#d3d3d3';
      }};
    display: flex;
    align-items: center;
    overflow: hidden;
    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: ${({ elevated }) =>
      elevated ? '0px 3px 4px #0000001C' : '#ffffff00'};
    flex-direction: ${({ iconPos }) =>
      iconPos === 'right' ? 'row-reverse' : 'row'};
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
      padding: 0;
      margin: ${({ iconPos }) =>
        iconPos === 'left' ? '0 0.5rem 0 0' : '0 0 0 0.5rem'};
    }
    > .input {
      flex: 1;
      width: 100%;
      height: ${({ multiline }) => (multiline ? 'fit-content' : '3rem')};
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
  }
`;

const TextField = ({
  placeholder,
  value,
  onChange,
  icon,
  type,
  iconPos,
  label,
  required,
  minLength,
  maxLength,
  rows,
  onFocus,
  onBlur,
  disabled,
  name,
  autoComplete,
  inputTag,
  error,
  helperText,
  elevated,
  className,
  ...props
}) => {
  const getInputTag = () => {
    switch (inputTag) {
      case 'number':
        return NumberFormat;
      case 'textarea':
        return 'textarea';
      default:
        return 'input';
    }
  };

  const InputTag = getInputTag();
  const uniqueId = Math.random();
  const [isFocus, setIsFocus] = useState();

  return (
    <StyledTextField
      className={`cui-textfield ${className}`}
      iconPos={iconPos}
      multiline={inputTag === 'textarea'}
      rows={rows}
      disabled={disabled}
      error={error}
      elevated={elevated}
    >
      {label && (
        <label htmlFor={uniqueId}>
          <Text tag="span" size={2}>
            {label}
          </Text>
        </label>
      )}
      <span className={`container ${isFocus ? 'focused' : ''}`}>
        {icon && <span className="icon">{icon}</span>}
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
            name={name}
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            required={required}
            minLength={minLength}
            maxLength={maxLength}
            rows={rows}
            autoComplete={autoComplete?.toString()}
            {...props}
          />
        )}
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
  type: PropTypes.string,
  iconPos: PropTypes.oneOf(['right', 'left']),
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  icon: PropTypes.element,
  label: PropTypes.string,
  elevated: PropTypes.bool,
  required: PropTypes.bool,
  minLength: PropTypes.number,
  maxLength: PropTypes.number,
  rows: PropTypes.number,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  name: PropTypes.string,
  autoComplete: PropTypes.bool,
  inputTag: PropTypes.oneOf(['textarea', 'number', 'input']),
  className: PropTypes.string,
};

TextField.defaultProps = {
  onFocus: () => null,
  onBlur: () => null,
  value: undefined,
  name: '',
  autoComplete: false,
  placeholder: '',
  rows: 2,
  icon: null,
  onChange: null,
  elevated: false,
  type: 'text',
  iconPos: 'left',
  label: null,
  required: false,
  minLength: 1,
  maxLength: 250,
  inputTag: 'input',
  className: '',
};

export default TextField;
