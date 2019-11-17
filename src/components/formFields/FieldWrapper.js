import React from "react";
import InputField from "../formFields/InputField";
import { Field } from "react-final-form";

const FieldWrapper = ({ name, validate, ...props }) => (
  <Field name={name} validate={validate}>
    {({ input, meta }) => (
      <InputField input={input} meta={meta} {...props} fieldName={name} />
    )}
  </Field>
);

export default FieldWrapper;
