import React, { useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import "./MenuHeader.css";
import logo from "../../../images/logo-1.svg";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import { HashLink } from "react-router-hash-link";
const MenuHeader = () => {
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    window.scrollY >= 100 ? setNavbar(true) : setNavbar(false);
  };
  window.addEventListener("scroll", changeBackground);
  const { user, logOut } = useAuth();
  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        collapseOnSelect
        expand="lg"
        fixed="top"
        className={navbar ? "navbar active" : "navbar"}
      >
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="" width="100" height="80" />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Nav.Link as={HashLink} to="/home#home">
                Home
              </Nav.Link>
              <Nav.Link as={HashLink} to="/home#services">
                Services
              </Nav.Link>
              <Nav.Link as={HashLink} to="/home#membership">
                Membership
              </Nav.Link>
              <Nav.Link as={HashLink} to="/home#about">
                About
              </Nav.Link>
              {user?.email ? (
                <Button onClick={logOut} className="custom-btn ms-3">
                  Logout
                </Button>
              ) : (
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              )}
              {user.email && (
                <Navbar.Text className="ps-5">
                  Signed in as: <a href="#login">{user?.displayName}</a>
                </Navbar.Text>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MenuHeader;
