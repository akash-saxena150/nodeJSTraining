var greetConfig = require("./config.json");
function greetMe(name){
    console.log(greetConfig.messages.es+" "+name+"!");
}
module.exports = greetMe;