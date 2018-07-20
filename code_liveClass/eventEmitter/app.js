var Emitter = require('events');

var emtr = new Emitter;

emtr.on('greet', function() {
	console.log('Somewhere, someone said hello.');
});
emtr.on('greet', function() {
	console.log('Hello back!');
});

emtr.emit('greet');