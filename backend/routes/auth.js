// routes/auth.js
const express = require('express');
const router = express.Router();

// (예시용) 메모리 저장소
const users = [];

router.post('/register', (req, res) => {
  const { name, email, password } = req.body;

  if (!email || !password || !name) {
    return res.status(400).json({ error: '모든 필드를 입력하세요.' });
  }

  const existing = users.find((user) => user.email === email);
  if (existing) {
    return res.status(409).json({ error: '이미 존재하는 이메일입니다.' });
  }

  users.push({ name, email, password });
  res.json({ success: true, message: '회원가입 완료' });
});

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) {
    return res.status(401).json({ error: '이메일 또는 비밀번호가 잘못되었습니다.' });
  }

  res.json({ success: true, message: '로그인 성공', user: { name: user.name, email: user.email } });
});

module.exports = router;
