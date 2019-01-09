var greetConfig = require("./config.json");
function greetMe(name){
    console.log(greetConfig.messages.es+" "+name+"!");
}
exports.greet = greetMe;
console.log("Module",module.exports);
console.log(exports)
