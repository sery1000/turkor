import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import IndustrySupport from './pages/IndustrySupport';
import JobMatching from './pages/JobMatching';
import LanguageExchange from './pages/LanguageExchange';
import EducationPrograms from './pages/EducationPrograms';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white font-sans">
        <Navbar />
        <main className="max-w-4xl mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/industry-support" element={<IndustrySupport />} />
            <Route path="/job-matching" element={<JobMatching />} />
            <Route path="/language-exchange" element={<LanguageExchange />} />
            <Route path="/education-programs" element={<EducationPrograms />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
