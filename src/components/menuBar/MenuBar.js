import React from "react";
import { Container, Row, Col } from "reactstrap";
import MenuItem from "./MenuItem";

const MenuBar = () => {
  const menus = [
    {
      name: "Home",
      path: "/"
    },
    {
      name: "Add new Videos",
      path: "/add-new-video"
    },
    {
      name: "My Videos",
      path: "/my-videos"
    }
  ];
  return (
    <div className="menu--container">
      <Container fluid className="max-width">
        <Row className="d-flex justify-content-between">
          <Col sm="12">
            <div className="nav--container">
              <ul className="nav">
                {menus.map(menu => (
                  <MenuItem key={menu.path} {...menu} />
                ))}
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MenuBar;
