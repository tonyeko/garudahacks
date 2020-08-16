import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/esm/Nav";
// import { NavLink } from "react-router-dom";

const NavigationBar = () => {
  return (
    <Navbar expand="lg" className="p-3" bg="dark" variant="dark">
      <Navbar.Brand>Health Society</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/ocr">OCR</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
