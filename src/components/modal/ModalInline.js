import React from "react";
import PropTypes from "prop-types";

const ModalInline = props => {
  const { isOpen, className, children } = props;

  return (
    <>
      {isOpen && (
        <div className={className}>
          <div className="modal-dark-backdrop"></div>
          <div className="modal-inline">{children}</div>
        </div>
      )}
    </>
  );
};

ModalInline.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired
};

export default ModalInline;
