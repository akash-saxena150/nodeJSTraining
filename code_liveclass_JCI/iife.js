var greet = (function(name){
    return function(){
        return "Hello "+name; 
    }
})("Akash");
greet();