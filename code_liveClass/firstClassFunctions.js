function myFirstFn(name){
    console.log("Hey"+name+", How you doing?")
}

myFirstFn(Akash);

function greetMe(baseFn, name){
    baseFn(name);
};

//greetMe(myFirstFn,"Akshay");

var myGreeting = function(name){
    console.log("Hola"+name+"!");
}
//greetMe(myGreeting,"Akash");

// greetMe(function(name){
//     console.log("Hey"+name+"!")
// }, "Akash")