import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className=" navbar bgColor5 d-flex align-content-center justify-content-between">
      <NavLink activeClassName="active " to="/dashboard">
        Home
      </NavLink>
      <NavLink activeClassName="active" to="/about">
        About
      </NavLink>
    </div>
  );
}

export default Navbar;
