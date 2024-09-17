import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">EventHub</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/events" className="hover:underline">Events</Link></li>
            <li><Link to="/login" className="hover:underline">Login</Link></li>
            <li><Link to="/signup" className="hover:underline">Sign Up</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
