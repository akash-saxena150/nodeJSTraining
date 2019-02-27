a = 10
function testFn(){
    console.log(this);
    console.log(this.a);
}
var obj = {
    a: 20,
    testFn: testFn,
    myFn: function(){
        console.log(this.a);
        this.testFn()
    }
}
var anotherObj = {
    a: 40,
    obj: obj
}
testFn();
obj.testFn();
anotherObj.obj.myFn();
//Undefined
//10