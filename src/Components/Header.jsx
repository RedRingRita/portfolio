import { Container, Nav, Navbar,} from 'react-bootstrap';

import cv from '../../src/Assets/cv/PrunelleStoessel_cv.pdf'

function Header() {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark" sticky="top">
      <Container>
        <Navbar.Brand href="#about">Prunelle STOESSEL</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ms-auto">
            <a href={cv} download="prunelle_stoessel_cv.pdf" className="btn btn-outline-warning">Télécharger mon CV</a>
            <Nav.Link href="#about">A propos</Nav.Link>
            <Nav.Link href="#work">Mon travail</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;