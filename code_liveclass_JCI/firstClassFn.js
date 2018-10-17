function appendGreet(name){
    var userName = name;
    return function(){
        return ("welcome "+userName);
    }
}
var customGreet = appendGreet("Akash");//closure
console.log(customGreet());
customGreet = null;