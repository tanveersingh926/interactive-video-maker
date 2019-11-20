import React from "react";
import PropTypes from "prop-types";
import { Col, Row, Button, Form as BootstrapForm } from "reactstrap";
import uuid from "uuid";
import { useHistory } from "react-router-dom";
import { VIDEO_SOURCE_YOUTUBE } from "../../constants/index";
import {
  required,
  isUrlValid,
  composeValidators
} from "../../utilities/validation";
import { Form } from "react-final-form";
import InputField from "../formFields/InputField";

const AddNewVideo = ({ updateVideoDetails }) => {
  let videoId = null;
  const history = useHistory();
  const createUrlSearchParam = url => {
    const paramString = url.split("?").pop();
    const searchParams = new URLSearchParams(paramString);
    return searchParams.get("v");
  };

  const onSubmit = values => {
    const {
      youtubeVideoUrl: videoUrl,
      title: videoTitle,
      shortDescription
    } = values;
    const uuidForVideo = uuid();
    videoId = createUrlSearchParam(videoUrl);
    updateVideoDetails({
      videoId,
      videoUrl,
      videoTitle,
      shortDescription,
      videoSource: VIDEO_SOURCE_YOUTUBE,
      id: uuidForVideo
    });
    history.push(`/video/${uuidForVideo}`);
  };

  return (
    <div className="mt-4">
      <h1 className="mb-5">Import Video</h1>
      <Row>
        <Col md={6}>
          <Form
            onSubmit={onSubmit}
            render={({ handleSubmit }) => (
              <BootstrapForm onSubmit={handleSubmit}>
                <Row form>
                  <Col md={6}>
                    <InputField
                      name="title"
                      validate={required}
                      labelText="Title"
                      fieldId="videoTitle"
                      placeholder="Enter Video Title"
                    />
                  </Col>
                  <Col md={6}>
                    <InputField
                      name="shortDescription"
                      labelText="Short Description"
                      fieldId="videoShortDescription"
                      placeholder="Enter Short Description"
                    />
                  </Col>
                </Row>
                <InputField
                  name="youtubeVideoUrl"
                  validate={composeValidators(required, isUrlValid)}
                  fieldText={[
                    `Enter the link to your video. Once we import it, you can start adding interactions.`,
                    `e.g. https://www.youtube.com/watch?v=DgfSDm65d`
                  ]}
                  labelText="Video URL"
                  fieldId="videoUrl"
                  placeholder="Enter youtube video link"
                />

                <Button color="primary" className="mt-4" type="submit">
                  Continue
                </Button>
              </BootstrapForm>
            )}
          />
        </Col>
      </Row>
    </div>
  );
};

AddNewVideo.propTypes = {
  updateVideoDetails: PropTypes.func.isRequired
};

export default AddNewVideo;
