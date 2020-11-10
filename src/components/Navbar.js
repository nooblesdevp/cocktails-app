import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar container  ">
      <div className="nav-center bgColor5 d-flex align-content-center justify-content-between">
        <Link to="/">Cocktail io</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
}

export default Navbar;
