import React from 'react';
import './NavBar.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar expand="lg" className="nav-custom" style={{ backgroundColor: '#060622' }} variant="dark">
      <Container>
        <Navbar.Brand href="#">
          <img src="/img/logoEscudo.png" width="50" height="50" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="mr-auto">
          <Nav.Link href='/' className="nav-link">Menu Principal</Nav.Link>
          <Nav.Link href='/museo-naval' className="nav-link">Museo Naval </Nav.Link>
          <Nav.Link href='/historia' className="nav-link">Historia</Nav.Link>
          <Nav.Link href='/galeria' className="nav-link">Galería</Nav.Link>
          <Nav.Link href='/actividades' className="nav-link">Actividades</Nav.Link>
          <Nav.Link href='/autoridades' className="nav-link">Autoridades</Nav.Link>
          <Nav.Link href='/comunicados' className="nav-link">Comunicados</Nav.Link>
          <Nav.Link href='/contacto' className="nav-link">Contacto</Nav.Link>
          <Nav.Link href='/instalaciones' className="nav-link">Instalaciones</Nav.Link>
          <Nav.Link href='/datos-personales' className="nav-link">Datos Personales</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;