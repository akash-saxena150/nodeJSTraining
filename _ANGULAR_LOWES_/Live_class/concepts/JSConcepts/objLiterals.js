// var Human = {
//     name: "Akash",
//     age: 34,
//     mobile: '12334567',
//     energy: 70,
//     companies: [
//         {name: 'GetSetGo Fitness', headquarters: "Dubai"},
//         {name: 'Lowes', headquarters: 'USA'}
//     ],
//     address: {city: 'Pune', Locality: 'Kalyani Nagar'},
//     eating: function(){
//         this.energy +=10;
//         console.log("Ate! new energy: "+this.energy);
//     },
//     walking: function(){
//         this.energy -= 5;
//         console.log("Walking. Energy: "+this.energy)
//     }
// }

// Human.walking();
// Human.walking();
// Human.eating();
// var key = "name";
// console.log(Human.name);
// console.log(Human[key]);//Why?

// var students = [
//     {name:'Akash', age: 34},
//     {name:'Akshay', age: 28}
// ]

// var studentRecords = {
//         Akash: {age: 34, contact: 123456, rank: 24},
//         Akshay: {age: 28, contact: 123456, rank: 20},
//         Pratik: {age: 23, contact: 123456, rank: 14}
//     };
// var students = {
//     records: studentRecords,
//     findByName: function(name){
//         return this.records[name]
//     }
// }
// var student = students.findByName("Akshay");
// console.log(student);
// var studentRecords = [
//         {name:"Akash",age: 34, contact: 123456, rank: 24},
//         {name: "Akshay", age: 28, contact: 123456, rank: 20},
//         {name: "Pratik", age: 23, contact: 123456, rank: 14}
//     ]

// var Student = {
//     name: '',
//     contact: 0,
//     age: 0,
//     init: function(obj){
//         this.name = obj.name;
//         this.age = obj.age;
//         this.contact = obj.contact
//     },
//     fetchDetails: function(){
//         return ({name: this.name, age: this.age, contact: this.contact})
//     }
// }
// var students = {};
// studentRecords.forEach(function(record){
//     students[record.name] = Object.create(Student);
//     students[record.name].init(record);
// })
// //console.log(students);
// var recordKeeper = {
//     records: students,
//     findByName: function(name){
//         return this.records[name].fetchDetails();
//     }
// }
// console.log(recordKeeper.findByName("Akash"));
var Human = {
    name: '',
    age: 0,
    energy: 70,
    walking: function(){
        this.energy -= 5;
        console.log(this.energy);
    },
    eating: function(){
        this.energy += 10;
        console.log(this.energy);
    }
}
console.log("Human", Human);
var ronaldo = Object.create(Human);
ronaldo.running = function(){
    this.energy -= 9;
    console.log(this.energy);
}
ronaldo.running();
var virat = Object.create(Human);
virat.batting = function(){
    this.energy -= 8;
    console.log(this.energy);
}
virat.energy = 90;
console.log(virat);

