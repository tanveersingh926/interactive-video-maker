import React, { useState } from "react";
import {
  Col,
  Row,
  Button,
  Form as BootstrapForm,
  ListGroup,
  ListGroupItem
} from "reactstrap";
import { useParams } from "react-router-dom";
import { Form } from "react-final-form";

import AddInteractionModal from "../interactionModal/AddInteractionModalConnected";
import CustomField from "../formFields/InputFieldWrapper";
import Video from "../videoPlayer/VideoConnected";
import InteractionItem from "./InteractionItem";

const ConfigureVideo = ({
  videoTitle,
  videoId,
  shortDescription,
  interactions,
  deleteInteraction
}) => {
  const [isOpen, setModalIsOpen] = useState(false);

  const { id: idFromParam } = useParams();
  const origin = window.location.origin;

  const shareUrlValue = `${origin}/video/${idFromParam}/share`;
  const codeToEmbed = `<iframe src="${origin}/video/${idFromParam}/embed" allowtransparency="true" frameborder="0" scrolling="no" width="640" height="390"></iframe>`;

  const onSubmit = values => {
    console.log(values);
  };

  const initialValues = {
    title: videoTitle,
    shortDescription: shortDescription,
    shareUrl: shareUrlValue,
    embed: codeToEmbed
  };

  return (
    <div className="mt-4">
      <h1 className="mb-5">{videoTitle}</h1>
      <Row>
        <Col md="6">
          <Form
            initialValues={initialValues}
            onSubmit={onSubmit}
            render={({ handleSubmit, values }) => (
              <BootstrapForm onSubmit={handleSubmit}>
                <Row form>
                  <Col md={6}>
                    <CustomField
                      name="title"
                      labelText="Title"
                      fieldId="videoTitle"
                      placeholder="Enter Video Title"
                      value="Tanveer"
                      disabled
                    />
                  </Col>
                  <Col md={6}>
                    <CustomField
                      name="shortDescription"
                      labelText="Short Description"
                      fieldId="videoShortDescription"
                      placeholder="Enter Short Description"
                      disabled
                    />
                  </Col>
                </Row>
                <CustomField
                  labelText="Share URL"
                  fieldId="videoShareUrl"
                  name="shareUrl"
                  readOnly
                />
                <CustomField
                  type="textarea"
                  labelText="Embed"
                  fieldId="videoEmbed"
                  name="embed"
                />
                <Button
                  color="primary"
                  className="mt-4"
                  onClick={() => console.log("Save Video")}
                  type="submit"
                >
                  Save Video
                </Button>
                <Button
                  color="primary"
                  className="mt-4 ml-2"
                  onClick={() => setModalIsOpen(true)}
                  type="button"
                >
                  Add Interaction
                </Button>
              </BootstrapForm>
            )}
          />
        </Col>
        <Col md="6">{videoId && <Video id={videoId} />}</Col>
      </Row>
      {interactions.length >= 1 && (
        <Row>
          <Col>
            <h3 className="mt-5">Interactions</h3>
            <ListGroup className="mb-4">
              {interactions.map(
                (
                  { questionLabel, displayQuestionAtSecond, questionId },
                  index
                ) => (
                  <ListGroupItem key={displayQuestionAtSecond}>
                    <InteractionItem
                      deleteItem={() => deleteInteraction(questionId)}
                      ques={questionLabel}
                      quesNumber={index + 1}
                      interactionTime={displayQuestionAtSecond}
                    />
                  </ListGroupItem>
                )
              )}
            </ListGroup>
          </Col>
        </Row>
      )}

      <AddInteractionModal isOpen={isOpen} setModalIsOpen={setModalIsOpen} />
    </div>
  );
};

export default ConfigureVideo;
