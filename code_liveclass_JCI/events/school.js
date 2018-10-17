var EventEmitter = require('events');
var Util = require('util');
var Msgs = require('./msgs.json')

var School = function(name){
    this.name = name;
    this.students = [];
}
Util.inherits(School, EventEmitter);

School.prototype.informManagement = function(e, data){//e: enrolled, data: {name: "Akash"}
    console.log(Msgs[e]);
    this.emit(e, data);
}
var mySchool = new School("The school of rock!")
mySchool.on('enrolled', function(data){
    this.students.push(data);
    console.log("Student list",this.students);
})
mySchool.on('quit', function(indx){
    this.students = this.students.slice(indx);
    console.log("Student list",this.students);
});

mySchool.informManagement('enrolled', {name: "AKash"});
mySchool.informManagement('enrolled', {name: "Akshay"});
mySchool.informManagement('enrolled', {name: "Shraddha"});
mySchool.informManagement('quit', 1);

