// src/components/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow p-4 flex justify-between">
      <div className="text-xl font-bold text-pink-600">TURKOR</div>
      <div className="space-x-4">
        <Link to="/" className="text-gray-700 hover:text-pink-500">Home</Link>
        <Link to="/industry-support" className="text-gray-700 hover:text-pink-500">산업지원</Link>
        <Link to="/job-matching" className="text-gray-700 hover:text-pink-500">취업매칭</Link>
        <Link to="/language-exchange" className="text-gray-700 hover:text-pink-500">언어교류</Link>
        <Link to="/education-programs" className="text-gray-700 hover:text-pink-500">교육프로그램</Link>
      </div>
    </nav>
  );
};

export default Navbar;
