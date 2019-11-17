import React from "react";
import {
  Button,
  Modal as DefaultModal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";
import PropTypes from "prop-types";

const Modal = props => {
  const {
    title,
    className,
    children,
    size = "lg",
    isOpen,
    onClose,
    footerBtns = [
      {
        text: "Cancel",
        action: onClose,
        isPrimary: false
      }
    ]
  } = props;

  return (
    <>
      <DefaultModal
        isOpen={isOpen}
        toggle={onClose}
        className={className}
        size={size}
      >
        {title && <ModalHeader toggle={onClose}>{title}</ModalHeader>}

        <ModalBody>{children}</ModalBody>

        <ModalFooter>
          {footerBtns.map(({ text, action, isPrimary }) => (
            <Button
              color={isPrimary ? "primary" : "secondary"}
              onClick={action}
              key={text}
            >
              {text}
            </Button>
          ))}
        </ModalFooter>
      </DefaultModal>
    </>
  );
};

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  size: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  footerBtns: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      action: PropTypes.func.isRequired,
      isPrimary: PropTypes.bool.isRequired
    })
  )
};

export default Modal;
