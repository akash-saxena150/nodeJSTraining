function greeter(name){
    this.name = name;
    this.greeting = "Hello!!!"+this.name;
    this.greet = function(){
        console.log(this.greeting);
    }
}
module.exports = greeter;