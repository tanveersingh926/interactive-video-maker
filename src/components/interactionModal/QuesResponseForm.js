import React from "react";
import PropTypes from "prop-types";
import InputField from "../formFields/InputField";
import { required } from "../../utilities/validation";
import CheckFieldWrapper from "../formFields/CheckFieldWrapper";
import { Col, Row, Button } from "reactstrap";

const QuesResponseForm = ({ index, name, values, fields }) => {
  return (
    <>
      <InputField
        labelText={`Response ${index + 1}`}
        fieldId={`videoInteractionRes${index + 1}`}
        name={`${name}.response`}
        validate={required}
        placeholder={`Enter response number ${index + 1}`}
      />
      <CheckFieldWrapper
        labelText="is this correct response?"
        fieldId={`correctResponseCheckbox${index + 1}`}
        name={`${name}.isCorrectResponse`}
        className="mb-2"
      />
      <CheckFieldWrapper
        type="radio"
        labelText="Open Link in new Tab"
        fieldId={`openLinkId${index + 1}`}
        name={`${name}.responseAction`}
        className="mb-2"
        value="openLink"
      />
      {values.responses &&
        values.responses[index] &&
        values.responses[index].responseAction === "openLink" && (
          <InputField
            fieldId={`urlToOpen${index + 1}`}
            name={`${name}.urlToOpen`}
            validate={required}
            placeholder={`Enter Link to open`}
          />
        )}

      <Row>
        <Col md="9" sm="8">
          <CheckFieldWrapper
            type="radio"
            labelText="Resume Video"
            fieldId={`resumeVideo${index + 1}`}
            name={`${name}.responseAction`}
            className="mb-2"
            value="resumeVideo"
          />
        </Col>
        {index > 1 && (
          <Col
            md="3"
            sm="4"
            className="text-right"
            onClick={() => {
              fields.remove(index);
            }}
          >
            <Button type="button" outline size="sm">
              Remove Response
            </Button>
          </Col>
        )}
      </Row>
    </>
  );
};

QuesResponseForm.propTypes = {
  index: PropTypes.number.isRequired,
  values: PropTypes.any,
  name: PropTypes.string.isRequired,
  fields: PropTypes.any
};
export default QuesResponseForm;
