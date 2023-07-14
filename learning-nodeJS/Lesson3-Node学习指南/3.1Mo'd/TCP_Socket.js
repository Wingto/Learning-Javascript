var net = require('net');
var server = net.createServer(function (conn) {
    console.log('connect');

    conn.on('data', function (data) {
        console.log(data + 'from' + conn.remoteAddress + '' + conn.remotePort);

        conn.write('Repeating' + data);
    });


    conn.on('close', function () {
        console.log('client closed connection');
    });
}).listen(8242);
console.log('listening on port: 8142');