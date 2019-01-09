var greetConfig = require("./config.json");
function greetMe(name){
    console.log(greetConfig.messages.en+" "+name+"!");
}
module.exports = greetMe;