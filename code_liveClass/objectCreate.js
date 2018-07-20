var obj = {
    name: 'Akash',
    age: 34,
    city: 'Pune'
}
var ak = Object.create(obj);
ak.name = "Akshay";
console.log(ak.name);
var sh = Object.create(obj);
console.log(sh.name);

