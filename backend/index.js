const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

app.use('/api', require('./routes/auth'));
app.use('/api', require('./routes/verify'));

app.listen(port, () => {
  console.log(`TURKOR 백엔드 API 서버 실행 중 (http://localhost:${port})`);
});
