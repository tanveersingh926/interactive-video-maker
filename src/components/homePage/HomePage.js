import React from "react";
import addVideoIcon from "../../assets/img/add-video-icon.svg";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Row,
  Col
} from "reactstrap";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Row>
      <Col sm="3" className="mt-4">
        <Card>
          <CardImg top width="100%" src={addVideoIcon} alt="Add New Video 1" />
          <CardBody>
            <CardTitle>New Video</CardTitle>
            <CardText>
              Lets make another with interactive and fun to watch.
            </CardText>
            <Link className="btn btn-primary" to={"/add-new-video"}>
              Lets go!
            </Link>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default HomePage;
