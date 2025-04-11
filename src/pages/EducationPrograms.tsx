import React from 'react';
import educationImg from '../assets/education.jpg';

// src/pages/EducationPrograms.tsx

// import turkorImage from "../assets/turkor-main.jpg"; ← 주석처리

const EducationPrograms = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-pink-600 mb-4">교육 프로그램</h2>
      <p className="text-gray-700 leading-relaxed">
        한국-튀르키예 청년들을 위한 맞춤형 언어 교육, 직업 교육, 그리고 문화 교육을 제공합니다.
      </p>
    </div>
  );
};

export default EducationPrograms;
