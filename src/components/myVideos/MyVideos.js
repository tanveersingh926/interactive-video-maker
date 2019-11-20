import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  Button,
  CardColumns,
  CardTitle,
  CardText,
  CardBody,
  Col,
  Row
} from "reactstrap";
import PropTypes from "prop-types";

const MyVideos = ({ fetchAllVideos, videos }) => {
  const openSharedUrl = id => {
    const origin = window.location.origin;
    const urlToOpen = `${origin}/video/${id}/share`;
    window.open(urlToOpen, "_blank");
  };

  useEffect(() => {
    fetchAllVideos();
  }, [fetchAllVideos]);
  return (
    <div className="mt-5">
      {videos.length >= 1 ? (
        <CardColumns>
          {videos.map(({ id, videoTitle, shortDescription }) => (
            <Card key={id}>
              <CardBody>
                <CardTitle>{videoTitle}</CardTitle>
                <CardText>{shortDescription}</CardText>
                <Button
                  type="button"
                  color="primary"
                  onClick={event => openSharedUrl(id)}
                >
                  View Video
                </Button>
              </CardBody>
            </Card>
          ))}
        </CardColumns>
      ) : (
        <Row>
          <Col>
            <h4>
              You don't have any video.{" "}
              <Link to="/add-new-video">Add new videos</Link>.
            </h4>
          </Col>
        </Row>
      )}
    </div>
  );
};

MyVideos.propTypes = {
  fetchAllVideos: PropTypes.func.isRequired,
  videos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      videoTitle: PropTypes.string.isRequired,
      shortDescription: PropTypes.string.isRequired
    })
  )
};

export default MyVideos;
