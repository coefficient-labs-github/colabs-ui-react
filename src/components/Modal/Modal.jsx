/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import Button from '../Button/Button';
import usePortal from '../../hooks/usePortal';
import useScrollBlocker from '../../hooks/useScrollBlocker';
import defaultTheme from '../../defaultTheme';

const StyledModal = styled.div`
  position: fixed;
  z-index: 1000000000000000000 !important;
  border-color: rgba(0, 0, 0, 0);
  border-style: solid;
  top: 50%;
  left: 50%;
  > .backdrop {
    top: 0;
    left: 0;
    position: fixed;
    height: 110vh;
    width: 110vw;
  }
  > .modalCard {
    position: absolute;
    transform: translate(-50%, -50%);
    bottom: initial;
    > .closeButton {
      position: absolute;
      top: 0;
      right: 0;
    }
  }
`;

const Modal = ({
  isOpen,
  onClose,
  children,
  parentId,
  withBackdrop,
  enableScrollLock,
  closeOnOutsideClick,
  withCloseButton,
  className,
  ...props
}) => {
  useScrollBlocker(isOpen && enableScrollLock);
  const popperRef = useRef();
  const target = usePortal(parentId);

  return createPortal(
    <StyledModal
      hidden={!isOpen}
      {...props}
      ref={popperRef}
      className={`cui-modal ${className}`}
    >
      {withBackdrop && (
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
        <div
          className="backdrop"
          onKeyDown={() => false}
          // role="backdrop"
          aria-label="backdrop"
          onClick={closeOnOutsideClick ? onClose : null}
          style={{ backgroundColor: withBackdrop ? '#00000088' : '' }}
        />
      )}
      <Card className="modalCard" elevation={4}>
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
    </StyledModal>,
    target
  );
};

StyledModal.defaultProps = { theme: defaultTheme };

Modal.propTypes = {
  anchorSelector: PropTypes.string.isRequired,
  isOpen: PropTypes.bool,
  closeOnOutsideClick: PropTypes.bool,
  enableScrollLock: PropTypes.bool,
  onClose: PropTypes.func,
  className: PropTypes.string,
  yPosition: PropTypes.string,
  xPosition: PropTypes.string,
  withBackdrop: PropTypes.bool,
};

Modal.defaultProps = {
  className: '',
  closeOnOutsideClick: false,
  enableScrollLock: false,
  isOpen: false,
  onClose: () => null,
  yPosition: null,
  xPosition: null,
  withBackdrop: false,
};

export default Modal;
