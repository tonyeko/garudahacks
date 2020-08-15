import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/esm/Nav";
import NavDropdown from "react-bootstrap/esm/NavDropdown";

const NavigationBar = () => {
  return (
    // <nav className="navbar bg-dark">
    //   <ul>
    //     <li>
    //       <NavLink exact to="/" activeClassName="active-navlink">
    //         Home
    //       </NavLink>
    //     </li>
    //     <li>
    //       <NavLink exact to="/stock" activeClassName="active-navlink">
    //         Stock
    //       </NavLink>
    //     </li>
    //   </ul>
    // </nav>
    <Navbar expand="lg" className="p-3" bg="dark" variant="dark">
      <Navbar.Brand>Nama App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
