var myObj = {
    name: "Akash",
    test: test
}
var anotherObj = {
    name: "Akshay"
}
function test(greet, postGreet ){
    //console.log(obj);
    console.log(greet+" "+this.name+ " "+postGreet);
}

myObj.test.call(anotherObj, "Hello", "How you doing?");