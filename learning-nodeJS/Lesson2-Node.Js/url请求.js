//导入协议
//设置ip
//设置port
const http = require("http");
const hostname = '127.0.0.9';
const port = 8100;



//新建服务器
const server = http.createServer(
    (req, res) => {
        //服务器的状态设置
        //服务器的头信息
        //服务器功能逻辑
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');

        switch (req.url) {
            case '/':
                res.end('hello');
                break;
            case '/1':
                res.end("world");
                break;
            default:
                res.end('Not found');
                break;

        }

    }

);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});