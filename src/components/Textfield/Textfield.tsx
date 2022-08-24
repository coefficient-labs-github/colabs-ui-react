import React, { useState, HTMLAttributes, ComponentProps } from 'react';
import styled from 'styled-components';
import NumberFormat from 'react-number-format';
import Text from '../Text/Text';
import defaultTheme from '../../defaultTheme';

type StyledTextfieldProps = HTMLAttributes<HTMLDivElement> & {
  disabled: boolean;
  multiline: boolean;
  fullWidth?: boolean;
  elevated?: boolean;
  error?: boolean;
};

type TextfieldProps = StyledTextfieldProps &
  HTMLAttributes<HTMLInputElement> &
  HTMLAttributes<HTMLTextAreaElement> &
  ComponentProps<typeof NumberFormat> & {
    placeholder?: string;
    className?: string;
    label?: string;
    iconPos?: 'left' | 'right';
    icon?: React.ReactElement;
    bottomActions?: React.ReactElement;
    onFocus?: () => void;
    onBlur?: () => void;
    autoComplete?: boolean;
    inputTag?: 'input' | 'textarea' | 'number';
    backgroundColor?: string;
    helperText?: string;
    containerProps?: HTMLAttributes<HTMLDivElement>;
  };

const StyledTextField = styled.div<StyledTextfieldProps>`
  z-index: 1;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  > label {
    font-family: ${({ theme }) => theme.font.main.light};
    font-size: 0.875rem;
    color: ${({ disabled }) => (disabled ? '#b6b6b6' : '#000')};
  }
  > .container {
    margin: 0 auto;
    padding: 0 0.75rem;
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
    ${({ multiline }) => (multiline ? '' : 'height: 34px')};
    &:hover {
      ${({ disabled }) =>
        disabled ? '' : 'background: #f9f9f9 0% 0% no-repeat padding-box;'};
    }
    &.focused {
      border: 1px solid #6da7fd;
    }
    > .icon {
      display: flex;
      align-items: center;
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
      margin: ${({ multiline }) => (multiline ? '0.75rem 0' : '0')};
      resize: none;
      border: 0;
      background: #ffffff00;
      color: #000;
      font-family: ${({ theme }) => theme.font.main.regular};
      font-size: 14px;
      letter-spacing: -0.02em;
      ::-webkit-scrollbar {
        width: 6px;
      }
      ::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.color.blue.main};
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
  onFocus,
  onBlur,
  disabled,
  inputTag,
  error,
  helperText,
  elevated,
  className,
  bottomActions,
  containerProps, // style
  ...props
}: TextfieldProps) => {
  const InputTag = inputTag === 'number' ? NumberFormat : inputTag;
  const uniqueId = Math.random().toString();
  const [isFocus, setIsFocus] = useState<boolean>(false);

  return (
    <StyledTextField
      className={`cui-textfield ${className}`}
      multiline={inputTag === 'textarea'}
      disabled={disabled}
      error={error}
      elevated={elevated}
      fullWidth={fullWidth}
      {...containerProps}
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
        {disabled && (
          <Text color="gray" size={3}>
            {placeholder}
          </Text>
        )}
        {!disabled && (
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
            if (disabled) return 'gray';
            return 'black';
          })()}
        >
          {helperText}
        </Text>
      )}
    </StyledTextField>
  );
};

StyledTextField.defaultProps = { theme: defaultTheme };

TextField.defaultProps = {
  onFocus: (): undefined => null,
  onBlur: (): undefined => null,
  error: false,
  backgroundColor: 'white',
  helperText: '',
  autoComplete: false,
  placeholder: '',
  icon: null,
  elevated: false,
  iconPos: 'left',
  label: null,
  inputTag: 'input',
  className: '',
  bottomActions: null,
  fullWidth: false,
  containerProps: {},
};

export default TextField;
