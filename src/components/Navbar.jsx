// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Expense Tracker</div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/track">Track Expenses</Link>
        <Link to ='/list'>Expense List</Link>
      </div>
    </nav>
  );
};

export default Navbar;
