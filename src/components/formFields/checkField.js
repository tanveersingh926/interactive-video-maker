import React from "react";
import { FormGroup, Label, Input } from "reactstrap";
import PropTypes from "prop-types";

const CheckField = ({
  type,
  fieldName,
  fieldId,
  labelText,
  className,
  input
}) => (
  <FormGroup check className={className}>
    <Input type={type} name={fieldName} id={fieldId} {...input} />
    <Label for={fieldId} check>
      {labelText}
    </Label>
  </FormGroup>
);

CheckField.propTypes = {
  type: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  fieldId: PropTypes.string.isRequired,
  fieldName: PropTypes.string.isRequired
};

export default CheckField;
