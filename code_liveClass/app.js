var fs = require('fs');

var readable = fs.createReadStream(__dirname + '/greet.txt', { encoding: 'utf8', highWaterMark: .5 * 1024 });

var writable = fs.createWriteStream(__dirname + '/greetcopy.txt');

readable.on('error', function(err){
    console.log(err);
});
readable.on('data', function(chunk) {
    console.log(chunk);
    console.log("--------------------------");
	writable.write(chunk);
});