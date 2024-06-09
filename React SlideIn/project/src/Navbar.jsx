import React from 'react';
import './navbar.css'; // Import the CSS file with the styles

const Navbar = () => {
  return (
    <div className="navbar">
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/services">Services</a>
      <a href="/contact">Contact</a>
    </div>
  );
};

export default Navbar;