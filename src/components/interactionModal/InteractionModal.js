import React, { useState } from "react";
import {
  Col,
  Row,
  Button,
  Form as BootstrapForm,
  // InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Label,
  FormGroup
} from "reactstrap";
import InputGroup from "../formFields/InputGroup";
import InputField from "../formFields/InputField";
import SelectField from "../formFields/SelectField";
import CheckField from "../formFields/CheckField";

import { Form } from "react-final-form";
import InputGroupWrapper from "../formFields/InputGroupWrapper";
import { required } from "../../utilities/validation";

const InteractionModal = () => {
  const onSubmit = values => {
    console.log(values);
  };

  return (
    <div className="mt-2">
      <Row>
        <Col md="12">
          <Form
            onSubmit={onSubmit}
            render={({ handleSubmit }) => (
              <BootstrapForm onSubmit={handleSubmit}>
                <Row form>
                  <Col md={4} sm={6} xs={8}>
                    <InputGroupWrapper
                      name="interactionAtTime"
                      validate={required}
                      labelText="Time of video to display question"
                      fieldId="videoInteractionAtTime"
                      placeholder="Enter time"
                      inputGroupText={"/ 22:30"}
                    />
                    {/* <CustomField
                      name="interactionAtTime"
                      validate={required}
                      labelText="Time of video to display question"
                      fieldId="videoInteractionAtTime"
                      placeholder="Enter time"
                    /> */}
                  </Col>
                </Row>

                <Button color="primary" className="mt-4" type="submit">
                  Continue
                </Button>
              </BootstrapForm>
            )}
          />
          {/* <Form>
            <Row form>
              <Col md={4} sm={6} xs={8}> */}
          {/* <FormGroup>
                  <Label>Time of video to display question</Label>
                  <InputGroup>
                    <Input placeholder="Enter time " />
                    <InputGroupAddon addonType="append">
                      <InputGroupText>/ 22:30</InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
                </FormGroup> */}
          {/* </Col>
            </Row>
            <h3>Question</h3> */}
          {/* <InputField
              fieldId="videoInteractionQue"
              fieldName="interactionQue"
              placeholder="Enter your question"
            /> */}
          {/* <div className="response--container response-odd-color">
              <InputField
                labelText="Response 1"
                fieldId="videoInteractionRes1"
                fieldName="interactionRes1"
                placeholder="Enter response number 1"
              />
              <CheckField
                labelText="This is correct response"
                fieldId="correctResponseCheckbox"
                fieldName="correctResponse"
                className="mb-2"
              />
              <CheckField
                type="radio"
                labelText="Resume Callback"
                fieldId="resumeCallbackID"
                fieldName="responseAction"
                className="mb-2"
              />
              <CheckField
                type="radio"
                labelText="Open URL in new Tab"
                fieldId="openUrlId"
                fieldName="responseAction"
                className="mb-2"
              />
            </div> */}
          {/* <div className="response--container  response-odd-color">
              <InputField
                labelText="Response 1"
                fieldId="videoInteractionRes1"
                fieldName="interactionRes1"
                placeholder="Enter response number 1"
              />
              <CheckField
                labelText="This is correct response"
                fieldId="correctResponseCheckbox"
                fieldName="correctResponse"
                className="mb-2"
              />
              <CheckField
                type="radio"
                labelText="Resume Callback"
                fieldId="resumeCallbackID"
                fieldName="responseAction"
                className="mb-2"
              />
              <CheckField
                type="radio"
                labelText="Open URL in new Tab"
                fieldId="openUrlId"
                fieldName="responseAction"
                className="mb-2"
              />
            </div> */}
          {/* <Button color="primary" className="mt-2">
              Add Another Response
            </Button>
          </Form> */}
        </Col>
      </Row>
    </div>
  );
};

export default InteractionModal;
