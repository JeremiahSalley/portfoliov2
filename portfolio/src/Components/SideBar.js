import React from "react";
import { Link } from "react-scroll";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from "./SideBarElements";

function SideBar({isOpen, toggle}) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink>
            <Link
              activeClass="active"
              to="/"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onClick={toggle}
            >
              Home
            </Link>
          </SidebarLink>
          <SidebarLink >
            <Link
              activeClass="active"
              to="/about"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onClick={toggle}
            >
              About
            </Link>
          </SidebarLink>
          <SidebarLink>
            <Link
              activeClass="active"
              to="/portfolio"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onClick={toggle}
            >
              Portfolio
            </Link>
          </SidebarLink>
          <SidebarLink>
            <Link
              activeClass="active"
              to="/contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onClick={toggle}
            >
              Contact
            </Link>
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
}

export default SideBar;
