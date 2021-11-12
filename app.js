const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extension: false}));

dotenv.config();

app.listen('5000', (req, res, next) => {
    console.log('5000번 포트에서 시작되었습니다.');
});

