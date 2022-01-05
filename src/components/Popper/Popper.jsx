/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import Button from '../Button/Button';
import usePortal from '../../hooks/usePortal';
import useScrollBlocker from '../../hooks/useScrollBlocker';
import useWindowDimensions from '../../hooks/useWindowDimensions';

const StyledPopper = styled.div`
  position: fixed;
  z-index: 1000000000000000000 !important;
  border-color: rgba(0, 0, 0, 0);
  top: 0;
  left: 0;
  border-style: solid;
  position: fixed;
  > .highlighter {
    border-radius: 0.675rem;
    box-shadow: 0 0 0 999rem rgba(0, 0, 0, 0.5);
    position: absolute;
    height: 100%;
    width: 100%;
    pointer-events: none;
  }
  > .backdrop {
    top: 0;
    left: 0;
    position: fixed;
    height: 110vh;
    width: 110vw;
  }
  > .popperCard {
    position: absolute;
    left: calc(100% + 1rem);
    right: initial;
    top: 0;
    bottom: initial;
    > .closeButton {
      position: absolute;
      top: 0;
      right: 0;
    }
    > .arrow {
      position: absolute;
      left: -0.25rem;
      top: 1rem;
      bottom: initial;
      right: initial;
      height: 0.75rem;
      width: 0.75rem;
      background: white;
      transform: rotate(-45deg);
    }
    &.left {
      left: initial;
      right: calc(100% + 1rem);
      > .arrow {
        right: -0.25rem;
        left: initial;
      }
    }
  }
  &.left {
    .popperCard {
      left: initial;
      right: calc(100% + 1rem);
      > .arrow {
        right: -0.25rem;
        left: initial;
      }
    }
  }
  &.top {
    .popperCard {
      top: initial;
      bottom: 0;
      > .arrow {
        top: initial;
        bottom: 1rem;
      }
    }
  }
`;

const Popper = ({
  isOpen,
  onClose,
  yPosition,
  xPosition,
  children,
  parentId,
  anchorSelector,
  withBackdrop,
  highlightElement,
  withCloseButton,
  closeOnOutsideClick,
  enableScrollLock,
  withArrow,
  closeWhenClickOutside,
  className,
  onNotFoundAnchor,
  ...props
}) => {
  const { height: viewportHeight } = useWindowDimensions();
  useScrollBlocker(isOpen && enableScrollLock);

  const popperRef = useRef();

  const elementRef = document.querySelector(anchorSelector);

  const getProps = () => {
    const rect = elementRef?.getBoundingClientRect();
    const style = {
      left: rect?.x - 8,
      top: rect?.y - 8,
      width: rect?.width + 16,
      height: rect?.height + 16,
    };
    const xPos = xPosition || (rect?.x - 8 >= (20 + 1) * 16 ? 'left' : 'right');
    const yPos =
      yPosition ||
      (rect?.y >= viewportHeight - rect?.bottom ? 'top' : 'bottom');
    return { style, className: `cui-popper ${xPos} ${yPos} ${className}` };
  };

  const target = usePortal(parentId);

  if (elementRef === null) {
    onNotFoundAnchor();
    return null;
  }

  return createPortal(
    <StyledPopper hidden={!isOpen} {...getProps()} {...props} ref={popperRef}>
      {(withBackdrop || closeOnOutsideClick) && (
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
        <div
          className="backdrop"
          onKeyDown={() => false}
          // role="backdrop"
          aria-label="backdrop"
          onClick={closeOnOutsideClick ? onClose : null}
          style={{
            backgroundColor:
              withBackdrop && !highlightElement ? '#00000088' : '#00000000',
          }}
        />
      )}
      {highlightElement && <div className="highlighter" />}
      <Card className="popperCard" elevation={4}>
        {withArrow && <div className="arrow" />}
        {withCloseButton && (
          <Button
            className="closeButton"
            icon={
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
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            }
            onClick={onClose}
            variant="tertiary"
          />
        )}
        {children}
      </Card>
    </StyledPopper>,
    target
  );
};

Popper.propTypes = {
  anchorSelector: PropTypes.string.isRequired,
  isOpen: PropTypes.bool,
  enableScrollLock: PropTypes.bool,
  closeOnOutsideClick: PropTypes.bool,
  onClose: PropTypes.func,
  onNotFoundAnchor: PropTypes.func,
  className: PropTypes.string,
  yPosition: PropTypes.string,
  xPosition: PropTypes.string,
  withBackdrop: PropTypes.bool,
  withHighlighter: PropTypes.bool,
};

Popper.defaultProps = {
  className: '',
  isOpen: false,
  enableScrollLock: false,
  closeOnOutsideClick: false,
  onClose: () => null,
  onNotFoundAnchor: () => null,
  yPosition: null,
  xPosition: null,
  withBackdrop: false,
  withHighlighter: false,
};

export default Popper;
