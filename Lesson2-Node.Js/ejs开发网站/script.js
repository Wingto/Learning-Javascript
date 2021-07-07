const http = require('http');
const fs = require('fs');
const ejs = require('ejs');
var template = fs.readFileSync(__dirname + '\\..\\npm入门\\hello.ejs', 'utf-8');

const server = http.createServer(
    (req, res) => {
        var data = ejs.render(template, {
            title: 'hello ejs',
            content: '<strong>big hello </strong>'
        });
        res.setHeader('Content-Type', 'text/html');
        res.statusCode = 200;
        res.end(data);

    }
);

const hostname = '127.0.1.4';
const port = 3000;
server.listen(port, hostname, () => {
    console.log(`Server runing at http://${hostname}:${port}/`);
});