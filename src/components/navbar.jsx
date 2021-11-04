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
        <a className="nav-link" href="#">
          Github
        </a>
      </div>
      <div className="nav-contact">
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=husseinabbasshirazi@gmail.com">
          Contact
        </a>
      </div>
    </nav>
  );
}

export default NavComponent;
