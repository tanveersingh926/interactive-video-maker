import React from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";
import InputField from "../formFields/InputField";
import CheckField from "../formFields/checkField";

const AddNewVideo = () => {
  return (
    <div className="mt-4">
      <h1 className="mb-5">Select Video</h1>
      <Row>
        <Col md="6">
          <Form>
            <Row form>
              <Col md={6}>
                <InputField
                  labelText="Title"
                  fieldId="videoTitle"
                  fieldName="title"
                  placeholder="Enter Video Title"
                />
              </Col>
              <Col md={6}>
                <InputField
                  labelText="Short Description"
                  fieldId="videoShortDescription"
                  fieldName="shortDescription"
                  placeholder="Enter Short Description"
                />
              </Col>
            </Row>
            <InputField
              fieldText={[
                `Enter the link to your video. Once we import it, you can start adding interactions.`,
                `e.g. https://www.youtube.com/watch?v=DgfSDm65d`
              ]}
              labelText="Video URL"
              fieldId="videoUrl"
              fieldName="youtubeVideoUrl"
              placeholder="Enter youtube video link"
            />

            <Row form>
              <Col md={6}>
                <InputField
                  labelText="Share URL"
                  fieldId="videoShareUrl"
                  fieldName="shareUrl"
                />
              </Col>
              <Col md={6}>
                <InputField
                  labelText="Embed"
                  fieldId="videoEmbed"
                  fieldName="embed"
                />
              </Col>
            </Row>
            <CheckField
              labelText="Email Required"
              fieldId="emailRequiredCheckbox"
              fieldName="emailRequired"
            />

            <Button color="primary" className="mt-4">
              Continue
            </Button>
            <Button color="primary" className="mt-4 ml-2">
              Add Interaction
            </Button>
          </Form>
        </Col>
        <Col md="6">
          <iframe
            title="player"
            id={`youtube-player-M7lc1UVf-VE`}
            width="100%"
            height="390"
            type="text/html"
            src="http://www.youtube.com/embed/M7lc1UVf-VE?hd=1&showinfo=0&autohide=1&modestbranding=1&iv_load_policy=3&rel=0&disablekb=1&html5=1&enablejsapi=1&widgetid=1&origin=http://localhost:3000/"
            frameBorder="0"
          ></iframe>
        </Col>
      </Row>
    </div>
  );
};

export default AddNewVideo;
