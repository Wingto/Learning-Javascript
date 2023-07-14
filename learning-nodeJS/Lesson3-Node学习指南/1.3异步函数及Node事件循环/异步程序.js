//创建服务器

const { Http2ServerRequest } = require("http2");

//每当打开服务器时，就会同时输出1-100的数

//然后启动延迟方法

var http = require('http');

var fs = require('fs');

var url = require('url');

var queStr = require('querystring');

//写入数字的方法
function writeNumber(res) {
    var counter = 0;
    for (var i = 0; i <= 100; i++) {
        counter++;
        res.write(counter.toString() + '\n');

    }
}
http.createServer(function (req, res) {
    var query = url.parse(req.url).query;
    //解析url并访问
    // var app = queStr.parse(query).file + '.txt';
    //将访问的网站解析字符到txt文件上
    var app = 'main.txt';
    res.writeHead(
        200,
        { 'Content-Type': 'text/plain' }
    );
    //调用数字方法
    writeNumber(res);

    //计时打开文件并且读取内容
    setTimeout(function () {
        console.log('opening' + app);
        fs.readFile(app, 'utf-8', function (err, data) {
            //readFile(文件名称，编译方法，回调函数)
            if (err)
                res.write('Could not find it');
            else {
                res.write(data);

            }
            res.end();
        });
    }, 2000);


}).listen(8101);

console.log('Server running at 8124');