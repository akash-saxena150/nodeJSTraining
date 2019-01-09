global.a = 10;
function test(){
    console.log(this);
    console.log(this.a);
};
global.test();
var myObj = {
    a: 50,
    test: test
}
myObj.test();