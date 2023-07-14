const http = require('http');
const fs = require('fs');
const efs = require('ejs');
const qs = require('querystring');

var template = fs.readFileSync(__dirname + '\\forum.ejs', 'utf-8');
var posts = [];

const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        req.data = '';
        req.on("readable", function () {
            var chr = req.read();
            if (chr)
                req.data += chr;

        }
        );
    }
    else {
        showForm(posts, res);
    }
}
);

const hostname = '127.0.0.5';
const port = 3000
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});


function showForm(p_posts, res) {
    var data = ejs.render(template, {
        title: 'hello ejs',
        posts: p_posts
    });
    res.setHeader('Content-Type', "text/html");
    res.statusCode = 200;
    res.end(data);
}