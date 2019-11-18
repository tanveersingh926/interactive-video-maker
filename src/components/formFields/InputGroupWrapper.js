import React from "react";
import InputGroup from "./InputGroup";
import { Field } from "react-final-form";

const InputGroupWrapper = ({ name, validate, ...props }) => (
  <Field name={name} validate={validate}>
    {({ input, meta }) => (
      <InputGroup
        input={input}
        meta={meta}
        {...props}
        fieldName={name}
        validate={validate}
      />
    )}
  </Field>
);

export default InputGroupWrapper;
