var EventEmitter = require('events');
var Util = require('util');
var Msgs = require('./msgs.json')

class School extends EventEmitter{
    constructor(name){
        super();
        this.name = name;
        this.students = []
    }
    informManagement(e,data){
        console.log(Msgs[e]);
        this.emit(e, data);
    }
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

