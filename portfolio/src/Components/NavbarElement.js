import styled from "styled-components";
// import { Link } from "react-router-dom";
import { Link } from "react-scroll";


export const Nav = styled.nav`
  background: #fff;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  posistion: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
    // background: #0B1828;
  }
`;

export const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
height: 80px;
z-index: 1;
width: 100%;
padding: 0 24px;
max-width: 1100px;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 780px){
      display: block;
      position: absolute;
      top: 1.4rem;
      right: 0;
      transform: translate(-100%, 60%)
      cusrsor: pointer;
      color: #000;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-left: 15rem;

  @media screen and (max-width: 780px){
      display: none;
  }
`;


export const NavLinks = styled(Link)`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
      border-bottom: 3px solid #E1E3E8;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  font-size: 1.4rem;
  padding: 14px;
  
  
`;

