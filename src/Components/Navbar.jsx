import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Github from "../Images/github.svg";
import LinkedIn from "../Images/linkedin.svg";
import fb from "../Images/fb.svg";

function NavBar() {
  return (
    <React.Fragment>
      <Navbar
        collapseOnSelect
        style={{
          backgroundColor: "#454545",
          color: "#FFFFFF"
        }}
        expand="lg"
      >

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto" style={{
            color: "#FFffff"
          }} >
            <Nav.Link href="/Home" style={{ color: 'white', textDecoration: 'none' }}>  Home</Nav.Link>
            <Nav.Link href="/Symptoms" style={{ color: 'white', textDecoration: 'none' }}>Symptoms</Nav.Link>
            <Nav.Link href="/Treatment" style={{ color: 'white', textDecoration: 'none' }}>Treatment</Nav.Link>
            <Nav.Link href="https://heartpredictss.herokuapp.com/predict/" style={{ color: 'white', textDecoration: 'none' }}>Predict</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="https://github.com" target="_blank">
              <img src={Github} width="30" height="30" alt="Github" />
            </Nav.Link>
            <Nav.Link
              href="https://www.linkedin.com/"
              target="_blank"
            >
              <img src={LinkedIn} width="30" height="30" alt="Linkedin" />
            </Nav.Link>
            <Nav.Link href="https://facebook.com" target="_blank">
              <img src={fb} width="30" height="30" alt="fb" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  );
}

export default NavBar;
