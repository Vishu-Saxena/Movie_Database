import React from 'react';
import './Navbar.css';
import SortDropdown from './SortDropdown';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-logo">MovieDB</h1>
      <h2>Discover the ratings that matter!</h2>
      <ul className="navbar-links">
        <SortDropdown />
      </ul>
    </nav>
  );
};

export default Navbar;
