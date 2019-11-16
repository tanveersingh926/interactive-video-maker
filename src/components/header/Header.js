import React from "react";
import { Container } from "reactstrap";
import PropTypes from "prop-types";

const Header = ({ title }) => {
  return (
    <header>
      <Container fluid className="max-width">
        <h1>{title}</h1>
      </Container>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
