var fs = require('fs');
var readable = fs.createReadStream(__dirname + '/greet.txt', { encoding: 'utf8',  highWaterMark: 1 * 1024 });
let i = 1;
var writable = fs.createWriteStream(__dirname + '/greetcopy.txt');
readable.on('readable',function(){
    console.log("Starting now ...")
})
readable.on('close',function(){
    console.log("File read")
})
readable.on('data', function(chunk) {
    console.log("Number: "+i);
    console.log(chunk);
    var test = writable.write(chunk);
    console.log(test);
    i++;
});