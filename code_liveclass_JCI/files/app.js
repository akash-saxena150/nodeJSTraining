var fs = require('fs');

var greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');
console.log(greet);

var greet2 = fs.readFile(__dirname + '/greet01.txt', 'utf8', function(err, data) {//error first pattern
    if(!err)
        console.log(data);
    else
        console.log("Error",err);
});

console.log("Yo!")