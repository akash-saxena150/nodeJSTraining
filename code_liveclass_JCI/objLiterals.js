var person = {
    name: "Akash",
    eating: function(){
        console.log("eating")
    },
    age: 34,
    company: {
        name: 'GetSetGo fitness',
        employees: 50,
        domain: 'Fitness'
    }
}
var Akash = Object.create(person);
console.log(Akash.name);
var Akshay = Object.create(person);
Akshay.name = "Akshay";
Akshay.age = 28;
console.log(Akshay);