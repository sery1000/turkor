// src/pages/Board.tsx
import React from 'react';

const Board = () => {
  return (
    <div className="max-w-3xl mx-auto mt-20 p-6 border shadow rounded">
      <h2 className="text-2xl font-bold mb-4">📋 게시판</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>공지사항과 자유게시판을 여기에 추가할 수 있어요</li>
        <li>글쓰기, 댓글, 조회수 기능도 추가 예정입니다</li>
        <li>다국어로 전환 가능하게 만들 수 있어요</li>
      </ul>
    </div>
  );
};

export default Board;
