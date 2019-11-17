import React, { useState } from "react";
import { Col, Row, Button, Form as BootstrapForm } from "reactstrap";
import { useParams } from "react-router-dom";
import { Form } from "react-final-form";

import Modal from "../modal/Modal";
import InteractionModal from "../interactionModal/InteractionModal";
import CustomField from "../formFields/FieldWrapper";
import VideoConnected from "../videoPlayer/VideoConnected";

const ConfigureVideo = ({ videoTitle, videoId, shortDescription }) => {
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
                  onClick={() => setModalIsOpen(true)}
                  type="button"
                >
                  Add Interaction
                </Button>
              </BootstrapForm>
            )}
          />
        </Col>
        <Col md="6">{videoId && <VideoConnected id={videoId} />}</Col>
      </Row>
      <Modal
        title="Add Interaction"
        isOpen={false} // {isOpen}
        onClose={() => setModalIsOpen(false)}
        footerBtns={[
          {
            text: "Save",
            action: () => console.log("test"),
            isPrimary: true
          },
          {
            text: "Save and Add Another",
            action: () => console.log("test"),
            isPrimary: true
          },
          {
            text: "Cancel",
            action: () => console.log("secondary"),
            isPrimary: false
          }
        ]}
      >
        <InteractionModal></InteractionModal>
      </Modal>
    </div>
  );
};

export default ConfigureVideo;
