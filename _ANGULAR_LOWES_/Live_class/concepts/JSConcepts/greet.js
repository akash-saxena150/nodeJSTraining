var GreetMsg = require("./greetConfig.json")
function greet(name, lang){
    var greeting = GreetMsg[lang];
    console.log(greeting +name+"!");
}
module.exports = greet;