import React from "react";
// import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { Link } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  MobileIcon,
  NavMenu,
  NavLinks,
  NavItem,
} from "./NavbarElement";


function NavBar({ toggle }) {
  return (
    <>
      <Nav className='font-mono'>
        <NavbarContainer>
          <MobileIcon onClick={toggle}>
            <FaBars size="30px"/>
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks>
                <Link
                  activeClass="active"
                  to="/"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  
                >
                  Home
                </Link>
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks>
              <Link
                  activeClass="active"
                  to="/about"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  
                >
                  About
                </Link>
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks>
              <Link
                  activeClass="active"
                  to="/portfolio"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  
                >
                  Portfolio
                </Link>
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks>
              <Link
                  activeClass="active"
                  to="/contact"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  
                >
                  Contact
                </Link>
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default NavBar;
