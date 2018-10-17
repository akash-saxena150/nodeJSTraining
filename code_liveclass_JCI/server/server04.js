var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    if(req.url=="/")
        {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            fs.createReadStream(__dirname + '/index.html').pipe(res);
        }
    else
    if((req.url).indexOf('api')>=0)
        {
            var obj = {
                akash: {firstname: 'Akash',
                lastname: 'Saxena', age: '34', company: 'GetSetGo Fitness'},
                akshay: {firstname: 'John',
                lastname: 'Doe'}
            };
            var tempArr = (req.url).split('/');
            var name = (tempArr[tempArr.length-1]);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(obj[name]?JSON.stringify(obj[name]):JSON.stringify({"result": "name not found"}));
        }
        else{
            res.writeHead(404);
            res.end();
        }
}).listen(1337, '127.0.0.1');