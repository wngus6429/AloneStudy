const express = require('express');
const mysql = require('mysql2/promise');
const app = express();

// MySQL과 연결하는 함수
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'test',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  });

app.get('/', function(req, res){
    res.send('hello NodeJs 입니당, 아오 됏냐');
})
app.listen(3000, () => console.log('3000번 포트 대기'));