var EventEmitter = require('events');
var util = require('util');

function Greetr(){
    this.greeting = "How you doing?";
}
util.inherits(Greetr, EventEmitter);
Greetr.prototype.greet = function(data){
    console.log(this.greeting+": "+data);
    this.emit('greet', data);
}
var greetMe = new Greetr;
greetMe.on('greet', function(data) {
	console.log('Someone greeted!: ' + data);
});
greetMe.greet("Akash");
greetMe.emit()
