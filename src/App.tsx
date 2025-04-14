import React from 'react';
import { Routes, Route, Link } from 'react-router-dom'; // ❌ BrowserRouter 제거
import Home from './pages/Home';
import EducationPrograms from './pages/EducationPrograms';
import IndustrySupport from './pages/IndustrySupport';
import LanguageExchange from './pages/LanguageExchange';
import JobMatching from './pages/JobMatching';
import Login from './pages/Login';
function App() {
  return (
    <>
      {/* 네비게이션 바 */}
      <nav className="bg-pink-100 px-4 py-3 shadow mb-6 rounded-b-2xl">
        <ul className="flex space-x-4 font-semibold">
          <li><Link to="/">홈</Link></li>
          <li><Link to="/education">교육</Link></li>
          <li><Link to="/industry">산업</Link></li>
          <li><Link to="/language">언어교류</Link></li>
          <li><Link to="/jobs">취업</Link></li>
        </ul>
      </nav>

      {/* 페이지 라우팅 */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<EducationPrograms />} />
        <Route path="/industry" element={<IndustrySupport />} />
        <Route path="/language" element={<LanguageExchange />} />
        <Route path="/jobs" element={<JobMatching />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
