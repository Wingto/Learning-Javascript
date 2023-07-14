const http = require("http");
// 定义常量，并导入http协议

const hostname = '127.0.0.1';
const port = 8180;
// 定义ip与端口

const server = http.createServer(
    //request, response
    (req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        //设定服务器状态
        //设置头信息
        //
        res.end('hello world');
    }
)
//服务器定义

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})