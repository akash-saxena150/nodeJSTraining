var Emitter = require('events');
var emtr = new Emitter();
emtr.on('greet', function(){
    console.log("someone greeted you");
});
emtr.on('greet', function(){
    console.log("Say hello to the stranger!");
});
console.log("hello");
emtr.emit('greet');
