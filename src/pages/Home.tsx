import React from "react";

const Home = () => {
  return (
    <div className="text-center p-10">
      <h1 className="text-4xl font-bold text-pink-500 mb-4">TurKor (튀르코)</h1>
      <p className="text-6xl font-medium text-gray-700 mb-6 leading-relaxed">
        대한민국과 튀르키예의 문화·교육·산업 교류를 위한 따뜻한 Bridge 플랫폼입니다.
      </p>
      <img
        src="/src/assets/turkor-main.jpg"
        alt="TurKor 대표 이미지"
        className="mx-auto mb-6 rounded-2xl shadow-lg w-[30cm] h-[20cm] object-cover"
      />
    </div>
  );
};

export default Home;
