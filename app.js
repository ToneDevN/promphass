const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production'; // ตรวจสอบว่าอยู่ในโหมดพัฒนา (development) หรือไม่
const app = next({ dev }); // สร้าง instance ของ Next.js
const handle = app.getRequestHandler(); // ให้ Next.js จัดการกับการ request อื่น ๆ

const port = 3000; // กำหนด port ที่จะใช้งาน

app.prepare().then(() => {
  const server = express();

  // ใช้ static files ใน public directory
  server.use(express.static('public'));

  // คำขอทั้งหมดที่ไม่ได้ถูกจับโดยเส้นทางด้านบนจะถูกจัดการโดย Next.js
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  // เปิดเซิร์ฟเวอร์
  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`Server listening on port ${port}`);
  });
});
