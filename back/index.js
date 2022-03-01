"use strict";
exports.__esModule = true;
//import  express from 'express';//export default를 가지고 오고 싶으면 이렇게 선언해줘야함.
var express = require("express"); //export default가 없으면 이렇게 선언해줘야함.
var app = express();
var prod = process.env.NODE_ENV === 'production';
app.set('port', prod ? process.env.PORT : 3065);
//node는 typescript를 실행할 수 없음. 
//개발용에서는  npm i D ts-node
app.get('/', function (req, res, next) {
    res.send('react nodebird 백엔드 정상 동작!');
});
app.listen(app.get('port'), function () {
    console.log("server is running on ".concat(app.get('port')));
});
