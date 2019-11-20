import React from "react";
import { FormGroup, Label, Input, FormText, FormFeedback } from "reactstrap";

import { Field } from "react-final-form";
import PropTypes from "prop-types";

const InputField = ({
  name,
  validate,
  labelText,
  fieldId,
  fieldText,
  disabled,
  plaintext,
  type,
  placeholder,
  readOnly,
  ...props
}) => {
  return (
    <Field name={name} validate={validate} {...props}>
      {({ input, meta }) => {
        let conditionProps = {};
        if (validate) {
          conditionProps = {
            valid: !!(meta.dirty && meta.valid && !meta.error),
            invalid: !!(meta.invalid && meta.touched && meta.error)
          };
        }
        return (
          <>
            <FormGroup>
              {labelText && <Label for={fieldId}>{labelText}</Label>}
              <Input
                readOnly={readOnly}
                name={name}
                id={fieldId}
                placeholder={placeholder}
                disabled={disabled}
                plaintext={plaintext}
                {...input}
                {...conditionProps}
                type={type}
                {...props}
              />
              {validate && meta.error && meta.touched && (
                <FormFeedback>{meta.error}</FormFeedback>
              )}
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
          </>
        );
      }}
    </Field>
  );
};

InputField.propTypes = {
  fieldText: PropTypes.arrayOf(PropTypes.string),
  type: PropTypes.string,
  labelText: PropTypes.string,
  fieldId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  plaintext: PropTypes.bool,
  readOnly: PropTypes.bool,
  validate: PropTypes.func
};

export default InputField;
