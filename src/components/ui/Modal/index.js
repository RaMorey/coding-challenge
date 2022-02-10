import PropTypes from 'prop-types';
import * as ReactModal from 'react-modal';
import { React, useEffect } from "react";
import cn from "classnames";
import styles from "./Modal.module.css";
import { CrossIcon } from '../Icon';
import Button from '../Button/Button';

export const Modal = ({ children, className, isOpen, onClose }) => {
  const classNames = cn('modal', styles.modal, className);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      e.stopPropagation();
      onClose();
    }
  }

  return (
    <ReactModal isOpen={isOpen} className={classNames}>
      <div>
        { children }
      </div>
      <Button
        className={styles['modal-close']}
        buttonType="action"
        onClick={onClose}
        aria-label="close"
      >
        <CrossIcon height={12} />
      </Button>
    </ReactModal>
  );
};
Modal.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
}

export default Modal;