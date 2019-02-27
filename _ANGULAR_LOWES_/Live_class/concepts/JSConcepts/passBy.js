var arr = [10, 20, 30];
var newArr = [];
arr.forEach(function(el){
    newArr.push(el);
})//Deep copying
newArr.push(200);
console.log(arr);//Lodash