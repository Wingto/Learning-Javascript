const http = require('http');

const config = require('./config').config;

const server = http.createServer(

    (req, res) => {

        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end("Helle world0");
    }
);

server.listen(config.port, config.hostname, () => {
    console.log(`Server runing is http://${config.hostname}:${config.port}/`);
});