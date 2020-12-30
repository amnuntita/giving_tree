import React from "react";
import {
  Navbar,
  Nav,
  NavItem,
  NavbarBrand,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const NavBar = () => {
  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/">Giving Tree Project</NavbarBrand>
      <Nav className="mr-auto">
        <NavItem>
          <NavLink href="/">FAQ</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/">About</NavLink>
        </NavItem>
        <UncontrolledDropdown>
          <DropdownToggle>Things</DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Give</DropdownItem>
            <DropdownItem>Take</DropdownItem>
            <DropdownItem>Trade</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
