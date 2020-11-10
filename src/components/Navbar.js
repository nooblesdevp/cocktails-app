import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar container d-flex justify-content-between">
      <div className="nav-center">
        <Link to="/">Cocktail io</Link>
      </div>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>
    </div>
  );
}

export default Navbar;
