import React from 'react';
import {Nav, Container, Link} from "react-bootstrap"
import { LinkContainer } from 'react-router-bootstrap'
import NavBarCSS from './NavBar.css'

function Navbar({theme, themeToggler}) {
  return <Container fluid='md' >
    <Nav style={{textDecoration: 'none', fontWeight: '600', marginTop:'25px'}} justify className='justify-content-center' variant="tabs" >
      <LinkContainer className='navItem textBox' to='/react-bootstrap-portfolio'>
        <Nav.Item >
          <Nav.Link className='navItem textBox' href="/react-bootstrap-portfolio">About Me</Nav.Link>
        </Nav.Item>
      </LinkContainer>

      <LinkContainer className='navItem textBox' to='/react-bootstrap-portfolio/projects'>
        <Nav.Item>
          <Nav.Link className='navItem textBox' href='/react-bootstrap-portfolio/projects'>Projects</Nav.Link>
        </Nav.Item>
      </LinkContainer>

      <LinkContainer className='navItem textBox' to='/react-bootstrap-portfolio/articles'>
      <Nav.Item>
        <Nav.Link className='navItem textBox' href='/react-bootstrap-portfolio/articles'>
          Articles
        </Nav.Link>
    </Nav.Item>
      </LinkContainer>
  </Nav>
</Container>
}

export default Navbar;
