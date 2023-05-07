const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const db = require('./models');
const app = express();

db.sequelize
  .sync()
  .then(() => {
    console.log('db 연결 성공');
  })
  .catch(console.error);
// MySQL과 연결하는 함수

app.use(morgan('dev'));
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true, // 이게 있어야 쿠키를 전달 할 수 있다
  })
);

// app.use는 req,res를 조작한다. 익스프레스 미들웨어,
// app.get, app.post도 사실 미들웨어임.
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// form을 통해서 전송할때 그 데이터를 해석해서 req.body에 넣어준다.
// 이런걸 잘 알아야함.

app.get('/', function(req, res){
    res.send('hello NodeJs 입니당, 아오 됏냐');
})

app.listen(3000, () => console.log('백엔드 작동 3000번 포트 대기'));