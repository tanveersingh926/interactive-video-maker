import React from "react";
import { FormGroup, Label, Input } from "reactstrap";
import PropTypes from "prop-types";

const CheckField = ({
  type = "checkbox",
  fieldName,
  fieldId,
  labelText,
  className
}) => (
  <FormGroup check className={className}>
    <Input type={type} name={fieldName} id={fieldId} />
    <Label for={fieldId} check>
      {labelText}
    </Label>
  </FormGroup>
);

CheckField.propTypes = {
  type: PropTypes.string,
  labelText: PropTypes.string.isRequired,
  fieldId: PropTypes.string.isRequired,
  fieldName: PropTypes.string.isRequired
};

export default CheckField;
