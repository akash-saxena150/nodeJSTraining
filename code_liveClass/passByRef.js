function test(d){
    d.height = 6;
    console.log(d);//
}
function Human(){
    this.hairColor = 'black';
    this.eyeColor = 'black'
}
var a = new Human;
//test(a);


var arr = [10, 20, 30];
var arr_01 = new Array;
for(var i = 0; arr[i]; i++)
    arr_01[i] = arr[i];
arr_01.push(100);
console.log(arr);
console.log(arr_01);