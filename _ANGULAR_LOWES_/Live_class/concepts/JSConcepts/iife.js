
var testClosure = (function(a){
    return function(){
        return "this is a: "+a;
    }
    console.log("Inside: ", a);
})(10)
console.log(testClosure());
testClosure = null;