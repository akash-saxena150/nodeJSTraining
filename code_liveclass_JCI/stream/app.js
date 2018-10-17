var fs = require('fs');

var readable = fs.createReadStream(__dirname + '/greet.txt', {encoding: 'utf8', highWaterMark: 1024*2});

var writable = fs.createWriteStream(__dirname + '/greetcopy.txt');
var i = 0;
readable.on('end', function() {
    console.log("Finished reading");
});
readable.on('data', function(chunk) {
    console.log(chunk);
    console.log("------")
    console.log(++i);
    writable.write(chunk);
});