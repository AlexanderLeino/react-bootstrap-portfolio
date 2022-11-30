import React from "react";
import { Nav, Container, Link } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import NavBarCSS from "./NavBar.css";

function Navbar() {
  return (
    <Container fluid="md">
      <Nav
        style={{marginTop: "25px" }}
        justify
        className="justify-content-center"
        variant="tabs"
        
      >
        <LinkContainer
          className="navItem textBox"
          to="/react-bootstrap-portfolio"
        >
          <Nav.Item >
            <Nav.Link
              className="navItem textBox"
              href="/react-bootstrap-portfolio"
              style={{fontSize: '20px'}}
            >
              About Me
            </Nav.Link>
          </Nav.Item>
        </LinkContainer>

        <LinkContainer
          className="navItem textBox"
          to="/react-bootstrap-portfolio/projects"
        >
          <Nav.Item>
            <Nav.Link
              className="navItem textBox"
              href="/react-bootstrap-portfolio/projects"
              style={{fontSize: '20px'}}
            >
              Projects
            </Nav.Link>
          </Nav.Item>
        </LinkContainer>

        <LinkContainer
          className="navItem textBox"
          to="/react-bootstrap-portfolio/articles"
        >
          <Nav.Item>
            <Nav.Link
              className="navItem textBox"
              href="/react-bootstrap-portfolio/articles"
              style={{fontSize: '20px'}}
            >
              Articles
            </Nav.Link>
          </Nav.Item>
        </LinkContainer>
      </Nav>
    </Container>
  );
}

export default Navbar;
