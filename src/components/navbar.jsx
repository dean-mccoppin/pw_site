import React from "react";

function NavComponent() {
  return (
    <nav className="navbar-container">
      <div className="nav-brand">Hussein Shirazi</div>
      <div className="nav-links">
        <a className="nav-link active" href="#">
          Home
        </a>
        <a className="nav-link" href="#">
          About
        </a>
        <a className="nav-link" href="#">
          Projects
        </a>
        <a className="nav-link" href="#">
          Github
        </a>
      </div>
      <div className="nav-contact">Contact</div>
    </nav>
  );
}

export default NavComponent;
