const express = require('express');
const app = express();

// Cổng chạy ứng dụng (Render sẽ tự cấp PORT qua process.env.PORT)
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Route RESTful API dạng GET
// Thêm route cho trang chủ /
app.get('/', (req, res) => {
  res.send('Chào mừng bạn đến với RESTful API Server!');
});
app.get('/api/hello', (req, res) => {
  res.status(200).json({
    message: 'Hello World from Node.js Express API!',
    status: 'success'
  });
});

app.listen(PORT, () => {
  console.log(`Server đang chạy tại cổng ${PORT}`);
});
