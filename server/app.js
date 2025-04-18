const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', require('./routes/auth'));

app.listen(4000, () => console.log('✅ API 서버 작동 중 http://localhost:4000'));

/* 📌 서버 실행 명령 */
// server 디렉토리에서 실행
// npm install express cors
// node app.js
