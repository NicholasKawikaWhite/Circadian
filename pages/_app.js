import "../styles/globals.css";
import react from "react";
import { Container, Card, Nav, Navbar, NavDropdown, Row, Col, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from "react";
import Image from 'react-bootstrap/Image';
import { timeFormat } from "d3-time-format";
import { format } from "d3-format";
import "../styles/Chart.modules.css";
import detectEthereumProvider from '@metamask/detect-provider';


async function printAccts() {
  const provider = await detectEthereumProvider();

  if (provider) {
    // From now on, this should always be true:
    // provider === window.ethereum
    console.log(await provider.request({method: 'eth_requestAccounts'}));
  } else {
    console.log('Please install MetaMask!');
  }
}

function MyApp({ Component, pageProps }) {
  const [buttonName, setButtonName] = useState("Connect Wallet");
  return (
    
    <div className="main">

      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <Navbar.Brand href="">
            <Image src="./logo.png" width="35" height="42" className="" alt="Circadian Logo"/>
            </Navbar.Brand>
            Circadian
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/charts">Derivatives Charts</Nav.Link>
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
          <Nav>
            <Nav.Link>
              <Button text="Connect To Wallet"
       onClick={() => printAccts()}>{buttonName}</Button>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
