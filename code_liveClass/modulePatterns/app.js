var greet01 = require('./greet1');
greet01();

var greet02 = require('./greet2');
greet02.greet();

var greet03 = require('./greet3');
greet03.greeting = "Hello from me!";
greet03.greet();//error

var greet03b = require('./greet3');
greet03b.greet();

var greet04 = require('./greet4');
var greet04_01 = new greet04("Akash");
greet04_01.greet();
var greet04_02 = new greet04("Shraddha");

var greet05 = require('./greet5');
greet05.greet();

var greet_exports = require('./greet');
greet_exports.greet();