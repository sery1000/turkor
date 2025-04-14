// routes/verify.js
const express = require('express');
const router = express.Router();

const codes = {}; // email: code 저장

// 인증번호 전송 (예시용, 실제로는 이메일로 전송 필요)
router.post('/send-code', (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ error: '이메일이 필요합니다.' });

  const code = Math.floor(100000 + Math.random() * 900000).toString();
  codes[email] = code;
  console.log(`[DEBUG] ${email}에 보낸 인증번호: ${code}`);

  res.json({ success: true, message: '인증번호 전송 완료' });
});

// 인증번호 확인
router.post('/verify-code', (req, res) => {
  const { email, code } = req.body;
  if (codes[email] === code) {
    delete codes[email];
    res.json({ success: true, message: '인증 성공' });
  } else {
    res.status(400).json({ error: '인증번호가 올바르지 않습니다.' });
  }
});

module.exports = router;
