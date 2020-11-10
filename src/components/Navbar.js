import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar container  ">
      <div className="nav-center bgColor5 d-flex align-content-center justify-content-between">
        <NavLink activeClassName="active " to="/dashboard">
          Cocktail io
        </NavLink>
        <NavLink activeClassName="active" to="/about">
          About
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
