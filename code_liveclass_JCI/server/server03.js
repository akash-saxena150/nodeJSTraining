var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    var obj = {
        firstname: 'John',
        lastname: 'Doe'
    };
    var xyz = JSON.stringify(obj);
    res.end(JSON.stringify(obj));
}).listen(1337, '127.0.0.1');