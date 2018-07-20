var arr = [];
arr.push(function(){
    console.log("Hello!");
})
arr.push(function(){
    console.log("Another function");
})
arr.push(function(){
    console.log("My function");
})
arr.forEach(function(fn){
    fn();
})