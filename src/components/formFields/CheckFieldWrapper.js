import React from "react";
import CheckField from "./CheckField";
import { Field } from "react-final-form";

const CheckFieldWrapper = ({ name, validate, type = "checkbox", ...props }) => (
  <Field name={name} validate={validate} type={type} {...props}>
    {({ input, meta }) => {
      // console.log(input);
      return (
        <CheckField
          input={input}
          meta={meta}
          type={type}
          {...props}
          fieldName={name}
        />
      );
    }}
  </Field>
);

export default CheckFieldWrapper;
