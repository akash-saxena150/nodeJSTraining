function Greetr(name){
    this.name=name;
    this.greet = function(){
        console.log("Hello "+this.name);
    }
}
var greetingMsg = "Well, well, well, look who's here ...";

module.exports = {
    greet: Greetr,
    greetingMsg: greetingMsg
}