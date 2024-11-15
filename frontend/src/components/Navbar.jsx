// Import necessary React modules
import React from 'react';
import { Link } from 'react-router-dom';  // Used to create links between pages

// Navbar component
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h1><Link to="/">Lovecraft eCommerce</Link></h1>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/city-list">Cities</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/admin-dashboard">Admin</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
