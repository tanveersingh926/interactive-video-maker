import React from "react";
import { FormGroup, Label, Input, FormText } from "reactstrap";
import PropTypes from "prop-types";

const InputField = ({
  fieldText,
  labelText,
  fieldId,
  fieldName,
  placeholder
}) => {
  return (
    <FormGroup>
      <Label for={fieldId}>{labelText}</Label>
      <Input
        type="text"
        name={fieldName}
        id={fieldId}
        placeholder={placeholder}
      />
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
  labelText: PropTypes.string.isRequired,
  fieldId: PropTypes.string.isRequired,
  fieldName: PropTypes.string.isRequired
};

export default InputField;
