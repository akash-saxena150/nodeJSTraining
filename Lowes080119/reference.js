// let arr = [10, 20, 30, 40];
// let arr01 = [];
// // for(let i = 0; arr[i]; i++)
// //     arr01[i] = arr[i];
// arr01 = arr.slice();
// arr01.push(500);
// console.log(arr, arr01);

var obj = {name: "Akash", age: 34};
var obj01 = {};
for(let key in obj)
    {
        obj01[key] = obj[key]
    }

obj01.company = "GetSetGo Fitness";
console.log(obj, obj01);

