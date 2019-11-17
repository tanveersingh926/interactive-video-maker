import React from "react";
import { FormGroup, Label, CustomInput } from "reactstrap";
import PropTypes from "prop-types";

const SelectField = ({
  labelText,
  fieldId,
  fieldName,
  placeholder,
  options
}) => {
  return (
    <FormGroup>
      <Label for={fieldId}>{labelText}</Label>
      <CustomInput type="select" name={fieldName} id={fieldId}>
        {placeholder && <option>{placeholder}</option>}
        {options.map(({ label, value }) => (
          <option value={value} key={value + label}>
            {label}
          </option>
        ))}
      </CustomInput>
    </FormGroup>
  );
};

SelectField.propTypes = {
  fieldText: PropTypes.arrayOf(PropTypes.string),
  labelText: PropTypes.string.isRequired,
  fieldId: PropTypes.string.isRequired,
  fieldName: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    })
  )
};

export default SelectField;
