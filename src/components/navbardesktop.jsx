import React from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

function NavComponent() {
  return (
    <nav className="navbar-container">
      <NavLink className="nav-brand" exact to="/">
        Hussein Shirazi
      </NavLink>
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
        <a
          className="nav-link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/dean-mccoppin"
        >
          Github
        </a>
      </div>
      <div className="nav-contact">
        <a href="mailto:husseinabbasshirazi@gmail.com">Contact</a>
      </div>
    </nav>
  );
}

export default NavComponent;
