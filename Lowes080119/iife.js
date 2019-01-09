//IIFE = Immediately Invoked Function Expressions

var greetMe =  (function(name){
    var myName = name;
    return (function(){
        console.log("Hello "+name+"!")
    })
}("Akash"));
console.log(greetMe);