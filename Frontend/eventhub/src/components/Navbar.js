// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">
          <Link to="/">EventHub</Link>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white hover:text-gray-400">Home</Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:text-gray-400">About</Link>
          </li>
          <li>
            <Link to="/events" className="text-white hover:text-gray-400">Events</Link>
          </li>
          <li>
            <Link to="/contact" className="text-white hover:text-gray-400">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
