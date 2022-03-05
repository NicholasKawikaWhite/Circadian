import "../styles/globals.css";
import react from "react";
import { Container, Card, Nav, Navbar, NavDropdown, Row, Col, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';
import { timeFormat } from "d3-time-format";
import { format } from "d3-format";
import "../styles/Chart.modules.css";
import Web3Modal from "web3modal";
import { useRef, useEffect, useState } from "react";
import { providers } from "ethers";



function MyApp({ Component, pageProps }) {
  const [connectedWallet, setConnectedWallet] = useState(false);
  const web3ModalRef = useRef(); // return the object with key named current

  // providers and signer  =>
  // providers is used for to get data from sc
  // signer is used for to sign data / set the data to sc

  const getSignerOrProvider = async (needSigner = false) => {
    const provider = await web3ModalRef.current.connect();
    const web3Provider = new providers.Web3Provider(provider);
    const { chainId } = await web3Provider.getNetwork();
    if (chainId !== 43114) {
      alert("USE RINKEEBY NETWORK");
      throw new Error("Change network to Rinkeby");
    }
    if (needSigner) {
      const signer = web3Provider.getSigner();
      return signer;
    }
    return provider;
  };

  const connectWallet = async () => {
    try {
      await getSignerOrProvider();
      setConnectedWallet(true);
    } catch (error) {
      console.log(" error", error);
    }
  };

  useEffect(() => {
    web3ModalRef.current = new Web3Modal({
      network: "rinkeby",
      providerOptions: {},
    });
  }, []);
  return (
    <div className="main">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <Navbar.Brand href="">
            <Image src="./tester.png" width="100" height="64" className="" alt="Circadian Logo"/>
            </Navbar.Brand>
            Circadian
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/charts">Charts</Nav.Link>
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
        onClick={connectWallet}>{"Connect Wallet"}</Button>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
