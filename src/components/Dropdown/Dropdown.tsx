import React, { useState, HTMLAttributes } from 'react';
import styled from 'styled-components';
import defaultTheme from '../../defaultTheme';

type StyledDropdownProps = HTMLAttributes<HTMLDivElement> & {
  fullWidth?: boolean;
  align?: 'left' | 'right' | 'center';
  variantIndex: 1 | 2;
  color?: keyof typeof defaultTheme.color;
  sizeIndex: 1 | 2 | 3 | 4 | 5;
};

type DropdownProps = StyledDropdownProps & {
  openOnClick?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary';
  chevronShown?: boolean;
  items: React.ReactElement[];
  toggle: React.ReactElement;
  className?: string;
};

const StyledDropdown = styled.div<StyledDropdownProps>`
  height: fit-content;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'fit-content')};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 9998;
  cursor: pointer;
  > .toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #d3d3d3;
    padding: 0 ${({ sizeIndex }) => [6, 8, 12, 16, 18][sizeIndex - 1]}px;
    height: ${({ sizeIndex }) => [20, 24, 34, 48, 60][sizeIndex - 1]}px;
    border-radius: ${({ sizeIndex }) => [6, 8, 10, 14, 18][sizeIndex - 1]}px;
    width: 100%;
    background-color: ${({ theme, variantIndex, color }) =>
      [theme.color[color]?.main, '#ffffff'][variantIndex - 1]};
    * {
      color: ${({ variantIndex }) => ['#ffffff', '#000000'][variantIndex - 1]};
      stroke: ${({ variantIndex }) => ['#ffffff', '#000000'][variantIndex - 1]};
    }
    > * {
      margin: 0 0.25rem;
      white-space: nowrap;
    }
    :hover {
      filter: brightness(0.97);
    }
  }
  > .select {
    position: absolute;
    z-index: 9999;
    border: 1px solid #d3d3d3;
    margin: 0;
    top: 100%;
    min-width: fit-content;
    border-radius: ${({ sizeIndex }) => [6, 8, 10, 14, 18][sizeIndex - 1]}px;
    width: calc(100% - 0.7rem);
    overflow: hidden;
    transform-origin: top center;
    display: none;
    padding: ${({ sizeIndex }) => [2, 3, 4, 5, 6][sizeIndex - 1]}px;
    background-color: #fff;
    animation: growOut 300ms ease-in forwards;
    ${({ theme }) => theme.elevation.sm}
    ${({ align }) => {
      if (align === 'right') return 'right: 0;';
      if (align === 'left') return 'left: 0;';
      return '';
    }}
      &.open {
      display: block;
      > .option {
        display: flex;
      }
    }
    > .option {
      display: none;
      border-radius: ${({ sizeIndex }) => [6, 8, 10, 14, 18][sizeIndex - 1]}px;
      margin: 0;
      background-color: #fffffffc;
      color: black;
      text-decoration: none;
      white-space: nowrap;
      backdrop-filter: blur(30px);
      -webkit-backdrop-filter: blur(30px);
      font-size: 16px;
      opacity: 0;
      display: flex;
      align-items: center;
      opacity: 1;
      &:hover {
        background-color: #1e84fa;
        * {
          color: #fff;
          stroke: #fff;
        }
      }
      > * {
        height: ${({ sizeIndex }) => [24, 28, 36, 40, 48][sizeIndex - 1]}px;
        padding: 0 1rem;
        width: 100%;
        display: flex;
        align-items: center;
      }
    }
  }

  @keyframes growOut {
    0% {
      transform: scale(1, 0.5);
      opacity: 0;
    }
    80% {
      opacity: 0.5;
    }
    100% {
      transform: scale(1, 1);
      opacity: 1;
    }
  }
`;

const Dropdown = ({
  items,
  toggle,
  chevronShown,
  fullWidth,
  align,
  variant,
  size,
  color,
  className,
  openOnClick,
  ...props
}: DropdownProps) => {
  const sizeIndex = { xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }[size];
  const variantIndex = { primary: 1, secondary: 2 }[variant];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledDropdown
      className={`cui-dropdown ${isOpen ? 'open' : ''} ${className}`}
      fullWidth={fullWidth}
      align={align}
      color={color}
      variantIndex={variantIndex}
      sizeIndex={sizeIndex}
      onMouseLeave={() => setIsOpen(false)}
      {...(openOnClick
        ? { onClick: () => setIsOpen((prev) => !prev) }
        : { onMouseEnter: () => setIsOpen(true) })}
      {...props}
    >
      <div className="toggle">
        {toggle}
        {chevronShown && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-chevron-down"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        )}
      </div>
      <ul className={`select ${isOpen ? 'open' : ''}`}>
        {items.map((item, index) => (
          <li key={item?.key || `dropdown-option-${index}`} className="option">
            {item}
          </li>
        ))}
      </ul>
    </StyledDropdown>
  );
};

StyledDropdown.defaultProps = { theme: defaultTheme };

Dropdown.defaultProps = {
  size: 'md',
  color: 'blue',
  variant: 'secondary',
  align: 'center',
  chevronShown: false,
  fullWidth: false,
  className: '',
  openOnClick: false,
};

export default Dropdown;
