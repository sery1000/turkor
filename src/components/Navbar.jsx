import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-pink-100 p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <span className="text-xl font-bold text-pink-600">TURKOR</span>
        <div className="space-x-4">
          <Link to="/" className="text-pink-600 hover:text-pink-800">Home</Link>
          <Link to="/industry-support" className="text-pink-600 hover:text-pink-800">산업지원</Link>
          <Link to="/job-matching" className="text-pink-600 hover:text-pink-800">취업매칭</Link>
          <Link to="/language-exchange" className="text-pink-600 hover:text-pink-800">언어교류</Link>
          <Link to="/education-programs" className="text-pink-600 hover:text-pink-800">교육프로그램</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
