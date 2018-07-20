function test(){
    console.log(this);
    this.greet = function(){
        console.log(test);
    }
}
console.log(test);