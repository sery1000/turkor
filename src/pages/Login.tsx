// src/pages/Login.tsx
import React from 'react';

const Login = () => {
  return (
    <div className="max-w-md mx-auto mt-20 p-6 border shadow rounded text-center">
      <h2 className="text-2xl font-bold mb-4">🔐 로그인</h2>
      <input type="email" placeholder="이메일" className="w-full border p-2 mb-4 rounded" />
      <input type="password" placeholder="비밀번호" className="w-full border p-2 mb-4 rounded" />
      <button className="bg-blue-500 text-white px-4 py-2 rounded w-full">로그인</button>
    </div>
  );
};

export default Login;
