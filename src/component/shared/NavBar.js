import React from "react";
import { Navbar, Nav,NavDropdown } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar bg="light">
      <Navbar.Brand>Giving Tree</Navbar.Brand>
      <Nav>
        <Nav.Link>About</Nav.Link>
        <Nav.Link>FAQ</Nav.Link>
        <NavDropdown title="Things">
          <NavDropdown.Item>Give</NavDropdown.Item>
          <NavDropdown.Item>Take</NavDropdown.Item>
          <NavDropdown.Item>Trade</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
