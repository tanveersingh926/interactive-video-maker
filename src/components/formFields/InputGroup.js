import React from "react";
import {
  FormGroup,
  Label,
  Input,
  InputGroup as BootstrapInputGroup,
  FormFeedback,
  InputGroupAddon,
  InputGroupText
} from "reactstrap";
import PropTypes from "prop-types";

const InputGroup = ({
  labelText,
  fieldId,
  fieldName,
  placeholder,
  input,
  meta,
  disabled = false,
  type = "input",
  plaintext,
  readOnly,
  inputGroupText,
  validate
}) => {
  let conditionProps = {};
  if (validate) {
    conditionProps = {
      valid: !!(meta.dirty && meta.valid && !meta.error),
      invalid: !!(meta.invalid && meta.touched && meta.error)
    };
  }
  return (
    <FormGroup>
      {labelText && <Label for={fieldId}>{labelText}</Label>}
      <BootstrapInputGroup>
        <Input
          readOnly={readOnly}
          name={fieldName}
          id={fieldId}
          placeholder={placeholder}
          disabled={disabled}
          plaintext={plaintext}
          {...input}
          {...conditionProps}
          type={type}
        />
        <InputGroupAddon addonType="append">
          <InputGroupText>{inputGroupText}</InputGroupText>
        </InputGroupAddon>
        {validate && meta.error && meta.touched && (
          <FormFeedback>{meta.error}</FormFeedback>
        )}
      </BootstrapInputGroup>
    </FormGroup>
  );
};

InputGroup.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  input: PropTypes.any,
  meta: PropTypes.any,
  labelText: PropTypes.string.isRequired,
  inputGroupText: PropTypes.string,
  fieldId: PropTypes.string.isRequired,
  fieldName: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  plaintext: PropTypes.bool,
  readOnly: PropTypes.bool,
  validate: PropTypes.func
};

export default InputGroup;
