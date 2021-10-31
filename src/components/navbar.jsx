import React from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

function NavComponent() {
  return (
    <nav className="navbar-container">
      <div className="nav-brand">Hussein Shirazi</div>
      <div className="nav-links">
        <NavLink className="nav-link" activeClassName="active" exact to="/">
          Home
        </NavLink>
        <NavLink className="nav-link" activeClassName="active" to="/about">
          About
        </NavLink>
        <NavLink className="nav-link" activeClassName="active" to="/projects">
          Projects
        </NavLink>
        <a className="nav-link" href="#">
          Github
        </a>
      </div>
      <div className="nav-contact">Contact</div>
    </nav>
  );
}

export default NavComponent;
