var express = require('express');
var app = express();
var server = require('http').createServer(app);

//指定静态文件的位置
app.use('/', express.static(__dirname + '/')); 

//监听端口号
server.listen(4010);