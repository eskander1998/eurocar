import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Description from "../../components/templates/Description"

const Logo = styled.img`
  width: 200px;
`;

const Menu = styled.div`
  width: 100%;
  // border-bottom: 5px solid #004AAD;
  border-bottom: 5px solid #f2c40e;
  a {
    font-family: "fjallaOne";
    font-size: 1.1rem;
    letter-spacing: 1px;
    text-decoration: none;
    text-transform: uppercase;
    color: #443f2e;
    transition: color 0.5s;
  }

  a:hover {
    color: #f2c40e;
    background-color: transparent;
  }

  .menu-btn {
    background-color: #f2c40e;
    color: transparent;
    border: none;
  }
`;

const MenuBar = () => {
  return (
    <Menu>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container className="py-2">
          <Navbar.Brand href="#home">
            <Logo src="./assets/logo.png" alt="" />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="menu-btn"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Accueil</Nav.Link>
              <Nav.Link href="#services">Nos services</Nav.Link>
              <Nav.Link href="#voitures">Nos voitures</Nav.Link>
              {/* <NavDropdown title="Our Fleet" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Gallery</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2">
                  Premium car rental
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.3">
                  Safety and Insurance
                </NavDropdown.Item>
              </NavDropdown> */}
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </Menu>
  );
};

export default MenuBar;
