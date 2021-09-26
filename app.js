const express = require('express');
const dotenv = require('dotenv');
const app = express();

dotenv.config();

app.listen('5000', (res, req, next) => {
    console.log('5000번 포트에서 시작되었습니다.');
});

