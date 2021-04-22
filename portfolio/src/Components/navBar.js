import React from "react";
// import { Link } from "react-router-dom";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <div className="fixed left-0 right-0">
      <nav
        className="fixed flex justify-center items-center h-16 bg-white text-black 
        relative shadow-sm font-mono "
        role="navigation"
      >
        <Link
          activeClass="active"
          to="/"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className="p-14 cursor-pointer"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="/about"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="p-14 cursor-pointer"
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="/portfolio"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="p-14 cursor-pointer"
        >
          Portfolio
        </Link>
        <Link
          activeClass="active"
          to="/contact"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="p-14 cursor-pointer"
        >
          Contact
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
