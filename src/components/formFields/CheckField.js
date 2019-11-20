import React from "react";
import { FormGroup, Label, Input } from "reactstrap";
import PropTypes from "prop-types";

import { Field } from "react-final-form";

const CheckField = ({
  name,
  validate,
  type,
  className,
  fieldId,
  labelText,
  ...props
}) => (
  <Field name={name} validate={validate} type={type} {...props}>
    {({ input }) => (
      <FormGroup check className={className}>
        <Input type={type} name={name} id={fieldId} {...props} {...input} />
        <Label for={fieldId} check>
          {labelText}
        </Label>
      </FormGroup>
    )}
  </Field>
);
CheckField.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  fieldId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  validate: PropTypes.any
};
export default CheckField;
