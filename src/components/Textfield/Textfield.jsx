import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import Text from '../Text/Text';
import defaultTheme from '../../defaultTheme';

const StyledTextField = styled.div`
  > label {
    color: #626262;
    line-height: normal;
    letter-spacing: 0.01px;
  }
  > .container {
    margin: 0 auto;
    margin-left: 0;
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 1px solid #d3d3d3;
    border-radius: 8px;
    opacity: 1;
    width: ${({ size }) => (size === 'sm' ? '261px' : '100%')};
    height: ${({ multiline }) => (!multiline ? '50px !important' : '100%')};
    overflow: hidden;
    display: flex;
    flex-direction: ${({ iconPos }) =>
      iconPos === 'left' ? 'row' : 'row-reverse'};
    ${({ multiline }) => (multiline ? '' : 'height: 3rem')};
    align-items: center;
    > :nth-child(1) {
      height: 1.25rem;
      padding: 0;
    }
    > .input {
      flex: 1;
      width: 100%;
      ${({ multiline }) => (multiline ? 'height: 200px; ' : 'height: 3rem')};
      resize: none;
      border: 0;
      color: #000;
      font-family: ${({ theme }) => theme.font.main.medium};
      font-size: 1rem;
      letter-spacing: -0.02em;
      padding: 0 1rem;
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
        border: 1.5px solid #6da7fd;
        border-radius: 8px;
      }
    }
  }
  > .helperText {
    color: ${({ error }) => (error ? 'red' : 'gray')};
    margin-left: 1rem;
  }
`;

StyledTextField.defaultProps = { theme: defaultTheme };

const TextField = ({
  placeholder,
  size,
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
  name,
  autoComplete,
  inputTag,
  error,
  helperText,
  elevated,
  // ...props
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
  return (
    <StyledTextField
      className="cui-textfield"
      iconPos={iconPos}
      multiline={inputTag === 'textarea'}
      rows={rows}
      error={error}
      size={size}
      elevated={elevated}
    >
      {label && (
        <label htmlFor={uniqueId}>
          <Text tag="span" size={2}>
            {label}
          </Text>
        </label>
      )}
      <span className="container">
        {icon}
        <InputTag
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
          onFocus={onFocus}
          autoComplete={autoComplete?.toString()}
          // {...props}
        />
      </span>
      {helperText && <span className="helperText">{helperText}</span>}
    </StyledTextField>
  );
};

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
  name: PropTypes.string,
  autoComplete: PropTypes.bool,
  inputTag: PropTypes.oneOf(['textarea', 'number', 'input']),
};

TextField.defaultProps = {
  onFocus: null,
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
};

export default TextField;
