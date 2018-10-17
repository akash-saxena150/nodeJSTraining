var a = {name: 'Akash', age: 34};
console.log(a);
var b = {};
for(var key in a)
    {
        b[key] = a[key];
    }
b['name'] = "Akshay";
console.log(a);

