const express = require('express');
const router = express.Router();
const users = [];

router.post('/register', (req, res) => {
  const { name, email, password } = req.body;
  users.push({ name, email, password });
  res.json({ success: true });
});

module.exports = router;