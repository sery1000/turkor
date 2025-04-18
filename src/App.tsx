// src/App.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './i18n';

import JoinFlow from './pages/JoinFlow';
import Notice from './pages/Notice';
import Login from './pages/Login'; // 파일이 있어야 함
import Board from './pages/Board'; // 파일이 있어야 함

function App() {
  return (
    <Routes>
      {/* 홈화면 */}
      <Route
        path="/"
        element={
          <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center justify-center p-8 text-center">
            {/* 로고 */}
            <img
              src="/logo.png"
              alt="TURKOR 로고"
              className="w-32 h-32 mb-6 rounded-full shadow-lg"
            />

            {/* 제목 */}
            <h1 className="text-4xl font-extrabold text-blue-700 mb-2">TURKOR 민간 교류 협회</h1>
            <h2 className="text-xl text-gray-600 mb-6">Korea-Türkiye Cultural Exchange</h2>

            {/* 인사말 */}
            <div className="max-w-2xl bg-white border shadow-md p-6 rounded-lg mb-8 text-gray-800 text-lg leading-relaxed">
              <p className="mb-4">안녕하세요, <strong>김정민 회장</strong>입니다.</p>
              <p>
                TURKOR는 한국과 튀르키예 양국의 우정과 협력을 바탕으로<br />
                교육, 문화, 비즈니스 전반의 민간 교류를 확대하는 플랫폼입니다.<br />
                상호 이해와 존중을 바탕으로 더 따뜻한 세상을 함께 만들어가고자 합니다.
              </p>
              <p className="mt-4 text-blue-600 font-semibold">여러분의 참여를 환영합니다!</p>
            </div>

            {/* 버튼 */}
            <div className="space-x-4">
              <a href="/join" className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">회원가입</a>
              <a href="/notice" className="bg-gray-300 text-gray-800 px-6 py-2 rounded hover:bg-gray-400">공지사항</a>
              <a href="/login" className="text-blue-600 underline">로그인</a>
              <a href="/board" className="text-blue-600 underline">게시판</a>
            </div>
          </div>
        }
      />

      {/* 기타 라우팅 */}
      <Route path="/join" element={<JoinFlow />} />
      <Route path="/notice" element={<Notice />} />
      <Route path="/login" element={<Login />} />
      <Route path="/board" element={<Board />} />
    </Routes>
  );
}

export default App;
