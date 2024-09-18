import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="mb-4">
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="text-blue-500 hover:underline">Login</Link>
        </li>
        <li>
          <Link to="/categories" className="text-blue-500 hover:underline">Categories</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
