var greetMe = function(name){
    greetYou(name);
}

var greetYou = function(name){
    console.log("Hi"+name+"Pleasure meeting you");
}

module.exports = greetMe;