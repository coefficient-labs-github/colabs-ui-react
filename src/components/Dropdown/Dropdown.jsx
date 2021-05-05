import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import defaultTheme from '../../defaultTheme';

const StyledDropdown = styled.div`
  height: fit-content;
  width: fit-content;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1000000;
  :hover {
    cursor: pointer;
    > .toggle {
      background-color: #efefef;
    }
    > .select {
      display: block;
      > .option {
        display: block;
      }
    }
  }
  > .toggle {
    display: flex;
    align-items: center;
    border: 1px solid #d3d3d3;
    padding: 0.5rem 1rem;
    background-color: white;
    border-radius: 0.625rem;
    width: 100%;
    > * {
      margin: 0 0.25rem;
      white-space: nowrap;
    }
  }
  > .select {
    position: absolute;
    z-index: 9000000;
    border: 1px solid #d3d3d3;
    margin: 0;
    top: 100%;
    min-width: fit-content;
    border-radius: 0.625rem;
    left: 0;
    width: 100%;
    z-index: -1;
    overflow: hidden;
    animation: growOut 300ms ease-in forwards;
    transform-origin: top center;
    display: none;
    padding: 0;
    &:hover {
      animation: growOut 300ms ease-in forwards;
    }
    > .option {
      display: none;
      width: 100%;
      padding: 0.75rem 1rem;
      margin: 0;
      background-color: #fffffffc;
      color: black;
      text-decoration: none;
      backdrop-filter: blur(30px);
      -webkit-backdrop-filter: blur(30px);
      font-size: 16px;
      opacity: 0;
      display: block;
      opacity: 1;
      &:hover {
        background-color: ${({ theme }) => theme.color.primary.main};
        * {
          color: white;
          stroke: white;
        }
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

const Dropdown = ({ items, toggle, chevronShown }) => {
  return (
    <StyledDropdown className="cui-dropdown">
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
      <ul className="select">
        {items.map((item) => (
          <li className="option">{item}</li>
        ))}
      </ul>
    </StyledDropdown>
  );
};

StyledDropdown.defaultProps = { theme: defaultTheme };

Dropdown.propTypes = {
  chevronShown: PropTypes.bool,
  items: PropTypes.arrayOf(PropTypes.element).isRequired,
  toggle: PropTypes.element.isRequired,
};

Dropdown.defaultProps = {
  chevronShown: false,
};

export default Dropdown;
