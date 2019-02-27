function test(){
    console.log(this.a);
}
function myTestFn(name, age){
    console.log(name, age);
    console.log(this.a);
}
var obj = {
    a: 10,
    test: myTestFn
}
var anotherObj = {
    a: 20,
    test: test
}
//obj.test.call(anotherObj, "Akash", 34);
obj.test.apply(anotherObj, ["Akash", 34]);
