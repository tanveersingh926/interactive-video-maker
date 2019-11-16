import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const MenuItem = ({ name, path }) => (
  <div key={path} className="nav__item">
    <NavLink to={path} exact activeClassName="active">
      <span>{name}</span>
    </NavLink>
  </div>
);

MenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired
};

export default MenuItem;
