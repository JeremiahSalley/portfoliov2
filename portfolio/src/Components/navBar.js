import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono"
      role="navigation"
    >
      <Link to="/" className='p-4'>Home</Link>
      <Link to="/about" className='p-4'>About</Link>
      <Link to="/portfolio" className='p-4'>Portfolio</Link>
      <Link to="/contact" className='p-4'>Contact</Link>
    </nav>
  );
}

export default Navbar;
