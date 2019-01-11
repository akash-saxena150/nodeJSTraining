// object properties and methods
var arr = [];
var obj = {
    greet: arr,
    cook: arr01
}
// // functions and arrays
function fn01(){
    console.log("Hello for the first time!")
};
arr.push(fn01);
function fn02(){
    console.log("Oo Hello again!")
};
arr.push(fn02);
function fn03(){
    console.log("Aah! Just go away. no more greetings!");
}
arr.push(fn03);
let event = 'greet';
obj[event].forEach(function(ins){
    ins();
})

