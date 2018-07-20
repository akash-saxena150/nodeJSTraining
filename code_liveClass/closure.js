function addVar(a){
    var a = a;
    var c = 10;
    return function(b){
        console.log(a+b);
        a = a+b;
    }
}
var test = addVar(20);
var initialize = addVar(10);
initialize(20);
initialize(20);
