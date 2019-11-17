import React from "react";
import { FormGroup, Label, Input, FormText, FormFeedback } from "reactstrap";
import PropTypes from "prop-types";

const InputField = ({
  fieldText,
  labelText,
  fieldId,
  fieldName,
  placeholder,
  input,
  meta,
  disabled = false,
  type = "input",
  plaintext,
  readOnly
}) => {
  const conditionProps = {
    valid: !!(meta.dirty && meta.valid && !meta.error),
    invalid: !!(meta.invalid && meta.touched && meta.error)
  };

  return (
    <FormGroup>
      {labelText && <Label for={fieldId}>{labelText}</Label>}
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
      {meta.error && meta.touched && <FormFeedback>{meta.error}</FormFeedback>}
      {fieldText && (
        <FormText>
          {fieldText.map((text, index) => (
            <span key={`index${index}`}>
              <span>{text}</span>
              <br />
            </span>
          ))}
        </FormText>
      )}
    </FormGroup>
  );
};

InputField.propTypes = {
  fieldText: PropTypes.arrayOf(PropTypes.string),
  type: PropTypes.string,
  labelText: PropTypes.string,
  fieldId: PropTypes.string.isRequired,
  fieldName: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  plaintext: PropTypes.bool,
  readOnly: PropTypes.bool
};

export default InputField;
