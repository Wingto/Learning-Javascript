//load http module
var http = require('http');

//创建服务器

http.createServer(function (req, res) {
    //req 发起请求
    //res 发起响应
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    res.end("HelloWold\n");

}
).listen(8124);

console.log('Server Runing on 8124');