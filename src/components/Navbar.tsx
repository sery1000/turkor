// src/components/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-pink-200 text-white px-6 py-4 shadow-lg mb-8 rounded-b-3xl">
     <ul className="flex justify-center space-x-8 text-lg font-semibold">
      <li><Link to="/" className="hover:text-yellow-100 transition">홈</Link></li>
      <li><Link to="/education" className="hover:text-yellow-100 transition">교육</Link></li>
      <li><Link to="/industry" className="hover:text-yellow-100 transition">산업</Link></li>
      <li><Link to="/language" className="hover:text-yellow-100 transition">언어교류</Link></li>
      <li><Link to="/jobs" className="hover:text-yellow-100 transition">취업</Link></li>
    </ul>
   </nav>
  );
};

export default Navbar;
