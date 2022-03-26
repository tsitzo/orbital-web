import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const NavigationBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>ORBITAL</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav>
            <LinkContainer to="/launches">
              <Nav.Link>Launches</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/news">
              <Nav.Link eventKey={2}>News</Nav.Link>
            </LinkContainer>
            <NavDropdown title="More" id="collasible-nav-dropdown">
              <LinkContainer to="/events">
                <NavDropdown.Item>Events</NavDropdown.Item>
              </LinkContainer>

              <LinkContainer to="/about">
                <NavDropdown.Item>About</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
