a = 10;
function xyz(){
    console.log(this);
    console.log(this.a);
    this.testFn = function(){
        console.log("Hello!")
    }
}
xyz();
console.log(this.testFn());
//obj.thisTest();