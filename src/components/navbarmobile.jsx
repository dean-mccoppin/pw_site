import React from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

function NavComponentMobile() {
  return (
    <Navbar bg="white" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <NavLink
                className="nav-link"
                activeClassName="active"
                exact
                to="/"
              >
                Home
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="/about"
              >
                About
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="/projects"
              >
                Projects
              </NavLink>
            </Nav.Link>
            <Nav.Link href="#">Github</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavComponentMobile;
