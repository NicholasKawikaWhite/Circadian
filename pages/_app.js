import "../styles/globals.css";
import react from "react";
import { Container, Card, Nav, Navbar, NavDropdown, Row, Col, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';
import { timeFormat } from "d3-time-format";
import { format } from "d3-format";

function MyApp({ Component, pageProps }) {
  return (
    <div className="main">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <Navbar.Brand href="">
            <Image src="public/Circadian Logo.png" width="64" height="64" className="" alt="Circadian Logo"/>
            </Navbar.Brand>
            Circadian
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
