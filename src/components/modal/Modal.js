import React from "react";
import {
  Button,
  Modal as DefaultModal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";
import PropTypes from "prop-types";
import { COLORS_CATEGORY } from "../../constants";

const Modal = props => {
  const {
    title,
    className,
    children,
    size,
    isOpen,
    onClose,
    footerBtns
  } = props;

  return (
    <DefaultModal
      isOpen={isOpen}
      toggle={onClose}
      className={className}
      size={size}
    >
      {title && <ModalHeader toggle={onClose}>{title}</ModalHeader>}

      <ModalBody>{children}</ModalBody>

      <ModalFooter>
        {footerBtns.map(({ text, action, isPrimary, type }) => (
          <Button
            color={
              isPrimary ? COLORS_CATEGORY.PRIMARY : COLORS_CATEGORY.SECONDARY
            }
            onClick={action}
            key={text}
            type={type}
          >
            {text}
          </Button>
        ))}
      </ModalFooter>
    </DefaultModal>
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
      isPrimary: PropTypes.bool.isRequired,
      type: PropTypes.string.isRequired
    })
  )
};

export default Modal;
