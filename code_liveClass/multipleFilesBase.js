var greet = require('./greetMultiple');
var GreetConfig = require('./greetMultiple/config').GREET;
greet[GreetConfig.EN]();
greet[GreetConfig.ES]();