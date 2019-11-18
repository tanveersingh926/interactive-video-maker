import React from "react";
import { Container, Row, Col } from "reactstrap";

const AppWrapper = ({ children, displayParentComponents = true, route }) => {
  return (
    <>
      {displayParentComponents ? (
        <>
          {children}
          <Container fluid className="max-width">
            <Row>
              <Col>{route}</Col>
            </Row>
          </Container>
        </>
      ) : (
        route
      )}
    </>
  );
};

export default AppWrapper;
