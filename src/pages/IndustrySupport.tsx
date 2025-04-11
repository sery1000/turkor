import React from 'react';
import industryImg from '../assets/industry.jpg';

const Industry = () => {
  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold mb-6">산업 교류</h1>
      <img src={industryImg} alt="산업 교류" className="mx-auto mb-6 rounded-2xl shadow-lg w-[25cm] h-[15cm] object-cover"/>
    </div>
  );
};

export default Industry;
