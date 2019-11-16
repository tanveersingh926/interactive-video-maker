import React from "react";
import { Container, Row, Col } from "reactstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import HomePage from "../components/homePage/HomePage";
import MyVideos from "../components/myVideos/MyVideos";
import AddNewVideo from "../components/addNewVideo/AddNewVideo";

const AppRouter = ({ children }) => {
  return (
    <Router>
      {children}
      <Container fluid className="max-width">
        <Row>
          <Col>
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route path="/add-new-video">
                <AddNewVideo />
              </Route>
              <Route path="/my-videos">
                <MyVideos />
              </Route>
              <Redirect to="/" />
            </Switch>
          </Col>
        </Row>
      </Container>
    </Router>
  );
};

export default AppRouter;
