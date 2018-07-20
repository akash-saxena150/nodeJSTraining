function test(name){
    var str = `Hey ${fnSuper(name)} How you doing?`;
    return str;
}
function fnSuper(n){
    return `super ${n}`
}
var finalStr = test("Akahs");
console.log(finalStr);
