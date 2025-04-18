// src/pages/Join/JoinComplete.tsx
import React from 'react';

const JoinComplete: React.FC = () => {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">가입이 완료되었습니다!</h2>
      <p className="text-gray-600 mb-6">이제 로그인하여 TURKOR 서비스를 이용해보세요.</p>
      <a href="/login" className="inline-block bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
        로그인 하러가기
      </a>
    </div>
  );
};

export default JoinComplete;