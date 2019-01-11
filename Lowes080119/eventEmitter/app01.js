var EventEmitter = require('events');
var util = require('util');

class Greetr extends EventEmitter {
	constructor(){
		super(EventEmitter);
		this.greeting = 'Hello world!';
	}
	greet(data){
		console.log(this.greeting + ': ' + data);
		this.emit('greet', data);
	}
	
}

let greeter1 = new Greetr();

greeter1.on('greet', function(data) {
	console.log('Someone greeted!: ' + data);
});

greeter1.greet('Tony');