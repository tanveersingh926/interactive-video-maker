import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import VideoIcon from "../../assets/img/video-icon.svg";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardBody,
  Col,
  Row
} from "reactstrap";

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
    <Row className="mt-5">
      {videos.length >= 1 ? (
        videos.map(({ id, videoTitle, shortDescription }) => (
          <Col md="2" sm="3" xs="6" key={id}>
            <Card>
              <CardImg top width="100%" src={VideoIcon} alt="VIdeo Icon" />
              <CardBody>
                <CardTitle>{videoTitle}</CardTitle>
                <CardText>{shortDescription}</CardText>
                <Button
                  type="button"
                  color="primary"
                  onClick={event => openSharedUrl(id)}
                >
                  View
                </Button>
              </CardBody>
            </Card>
          </Col>
        ))
      ) : (
        <Col>
          <h4>
            You don't have any video.{" "}
            <Link to="/add-new-video">Add new videos</Link>.
          </h4>
        </Col>
      )}
    </Row>
  );
};

export default MyVideos;
