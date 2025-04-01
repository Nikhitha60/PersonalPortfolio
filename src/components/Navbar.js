import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import ToggleModeButton from "./ToggleModeButton"; // path may be ../ToggleModeButton based on your folder structure
import { Flex, Spacer} from "@chakra-ui/react";
import { useColorModeValue, Box } from "@chakra-ui/react";

import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }
  

  window.addEventListener("scroll", scrollHandler);

  const bgColor = useColorModeValue("gray.100", "#1a1a2f");
  const textColor = useColorModeValue("black", "white");

  return (

    <Box bg={`${bgColor} !important`} color={`${textColor} !important`}>
    
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
     

     <Container fluid className="d-flex justify-content-between align-items-center px-4">
     {/* <Navbar.Brand href="/" className="d-flex align-items-center">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand> */}
        <Navbar.Brand href="/" className="d-flex align-items-center ">
    <img src={logo} className="img-fluid logo" alt="brand" style={{ height: "40px" }} />
  </Navbar.Brand>

        <Flex  align="center">
         <Spacer /> 
        <div className="ms-auto me-2 d-flex align-items-center">
          <ToggleModeButton />
        </div> 
      </Flex>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
            <Nav.Link
            as={Link}
            to="/"
            onClick={() => updateExpanded(false)}
            className="d-flex align-items-center gap-2"
          >
             <AiOutlineHome /> Home
              {/* <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link> */}
             </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
                className="d-flex align-items-center gap-2"
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
                 className="d-flex align-items-center gap-2"
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
                 className="d-flex align-items-center gap-2"
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>

           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Box>
  );
}

export default NavBar;
