import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import LanguageExchange from "./pages/LanguageExchange";
import IndustrySupport from "./pages/IndustrySupport";
import JobMatching from "./pages/JobMatching";
import EducationPrograms from "./pages/EducationPrograms";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-blue-50 font-sans">
        <Navbar />
        <main className="max-w-4xl mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/language-exchange" element={<LanguageExchange />} />
            <Route path="/industry-support" element={<IndustrySupport />} />
            <Route path="/job-matching" element={<JobMatching />} />
            <Route path="/education-programs" element={<EducationPrograms />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
