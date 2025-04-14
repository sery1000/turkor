import React, { useState } from 'react';
import axios from 'axios';
const Login: React.FC = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [language, setLanguage] = useState('ko');
    // 1. 상단 useState 선언
  const [error, setError] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleLogin = () => {
    if (form.email && form.password) {
      localStorage.setItem('language', language);
      alert(`로그인 성공! 언어 설정: ${language}`);
      // 실제 로그인 처리 API 호출 예정
    }
  };


// 2. handleLogin 함수
const handleLogin = async () => {
  try {
    const res = await axios.post('/api/login', { email: form.email, password: form.password });
    // 로그인 성공 처리
  } catch (err) {
    if (err.response?.status === 401) {
      setError('이메일 또는 비밀번호가 잘못되었습니다.');
    } else {
      setError('로그인 중 오류가 발생했습니다.');
    }
  }
};



  return (
    <div className="max-w-md mx-auto mt-20 p-6 border rounded shadow">
      <h2 className="text-xl font-bold mb-6">로그인</h2>
      <div className="space-y-4">
        <input
          type="email"
          name="email"
          placeholder="이메일"
          value={form.email}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <input
          type="password"
          name="password"
          placeholder="비밀번호"
          value={form.password}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="w-full border p-2 rounded"
        >
          <option value="ko">🇰🇷 한국어</option>
          <option value="en">🇬🇧 English</option>
          <option value="tr">🇹🇷 Türkçe</option>
        </select>
        <button
          onClick={handleLogin}
          disabled={!form.email || !form.password}
          className="w-full bg-blue-500 text-white py-2 rounded"
        >
          로그인
        </button>
        // 3. 에러 메시지 출력
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>
    </div>
  );
};

export default Login;
