import React from 'react';
import languageImg from '../assets/language.jpg';

const Language = () => {
  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold mb-6">언어 교류</h1>
      <img src={languageImg} alt="언어 교류" className="mx-auto mb-6 rounded-2xl shadow-lg w-[25cm] h-[15cm] object-cover"/>
    </div>
  );
};

export default Language;
