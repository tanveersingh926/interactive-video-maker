import React from "react";
import { Col, Row, Button, Form as BootstrapForm } from "reactstrap";
import uuid from "uuid";
import arrayMutators from "final-form-arrays";
import { FieldArray } from "react-final-form-arrays";
import { Form } from "react-final-form";
import PropTypes from "prop-types";
import InputGroupWrapper from "../formFields/InputGroupWrapper";
import { required } from "../../utilities/validation";
import { convertToMinutesAndSeconds } from "../../utilities/videoHelpers";
import InputField from "../formFields/InputField";
import QuesResponseForm from "./QuesResponseForm";
import Modal from "../modal/Modal";
import { RESPONSE_ACTION } from "../../constants";

const AddInteractionModal = ({
  videoDuration,
  isOpen,
  setModalIsOpen,
  addInteraction
}) => {
  let submitForm;
  let resetForm;
  const initialInterationAns = { responseAction: "resumeVideo" };

  const onSubmit = ({
    displayQuestionAt: displayQuestionAtSecond,
    questionLabel,
    responses
  }) => {
    const responsesToStore = responses.map(
      ({ response, isCorrectResponse, urlToOpen, responseAction }, index) => ({
        responseId: uuid(),
        responseText: response,
        isCorrect: isCorrectResponse,
        urlToOpen,
        noOfTimesResponseSelected: 0,
        shouldOpenUrl:
          responseAction === RESPONSE_ACTION.OPEN_LINK ? true : false,
        resumeVideo:
          responseAction === RESPONSE_ACTION.RESUME_VIDEO ? true : false
      })
    );
    const interactionDetails = {
      questionLabel,
      questionId: uuid(),
      responses: [...responsesToStore],
      displayQuestionAtSecond
    };
    addInteraction(interactionDetails);
  };
  const closeModal = () => setModalIsOpen(false);
  const videoTotalDuration = convertToMinutesAndSeconds(videoDuration);
  const footerBtns = [
    {
      text: "Save",
      action: event => {
        submitForm(event);
        setModalIsOpen(false);
      },
      isPrimary: true,
      type: "submit"
    },
    {
      text: "Save and Add Another",
      action: event => {
        submitForm(event);
        resetForm();
      },
      isPrimary: true,
      type: "submit"
    },
    {
      text: "Cancel",
      action: closeModal,
      isPrimary: false,
      type: "button"
    }
  ];

  return (
    <Modal
      title="Add Interaction"
      isOpen={isOpen}
      onClose={closeModal}
      footerBtns={footerBtns}
      size="lg"
    >
      <Form
        onSubmit={onSubmit}
        mutators={{
          ...arrayMutators
        }}
        render={({
          handleSubmit,
          form: {
            mutators: { push }
          },
          form,
          values
        }) => {
          submitForm = handleSubmit;
          resetForm = form.reset;
          (!values.responses || values.responses.length < 2) &&
            push("responses", initialInterationAns);
          return (
            <BootstrapForm onSubmit={handleSubmit}>
              <div className="mt-2">
                <Row>
                  <Col md="12">
                    <Row form>
                      <Col md={4} sm={6} xs={8}>
                        <InputGroupWrapper
                          name="displayQuestionAt"
                          validate={required}
                          labelText="Time of video to display question"
                          fieldId="videoInteractionAtTime"
                          placeholder="Enter time"
                          inputGroupText={videoTotalDuration}
                        />
                      </Col>
                    </Row>
                    <h3>Question</h3>
                    <InputField
                      name="questionLabel"
                      validate={required}
                      fieldId="videoInteractionQue"
                      placeholder="Enter your question"
                    />

                    <FieldArray name="responses">
                      {({ fields }) =>
                        fields.map((name, index) => (
                          <div
                            key={name}
                            className={`response--container ${index % 2 === 0 &&
                              "response-odd-color"}`}
                          >
                            <QuesResponseForm
                              index={index}
                              name={name}
                              values={values}
                              fields={fields}
                            />
                          </div>
                        ))
                      }
                    </FieldArray>
                    {values.responses && values.responses.length < 6 && (
                      <Button
                        color="primary"
                        className="mt-2"
                        onClick={() => push("responses", initialInterationAns)}
                      >
                        Add Another Response
                      </Button>
                    )}
                  </Col>
                </Row>
              </div>
            </BootstrapForm>
          );
        }}
      />
    </Modal>
  );
};

AddInteractionModal.propTypes = {
  videoDuration: PropTypes.number,
  isOpen: PropTypes.bool.isRequired,
  setModalIsOpen: PropTypes.func.isRequired,
  addInteraction: PropTypes.func.isRequired
};

export default AddInteractionModal;
