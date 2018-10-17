function Greetr(name){
    this.name = name;
    this.greet = function(){
        console.log("Welcome"+this.name);
    }
}
module.exports = Greetr;