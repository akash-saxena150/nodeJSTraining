var fs = require('fs');
// var greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');
// console.log(greet);

var greet2 = fs.readFile(__dirname + '/greet.txt', 'utf8', function(err, data) {//error first pattern
    console.log(data);
    return data;
    //console.log(err);
});
console.log(greet2);
console.log("I gotta be executed first!")