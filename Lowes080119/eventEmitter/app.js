const EventEmitter = require('events');
class Emitter extends EventEmitter {}
let events = new Emitter;
let e = (require('./config')).events;

events.on(e.COOK, function(){
    console.log("wash the veggies")
});
events.on(e.COOK, function(){
    console.log("Chop the veggies")
});
events.on(e.COOK, function(){
    console.log("Cook the veggies")
});

events.on(e.CLEAN, function(){
    console.log("dust the house")
});
events.on(e.CLEAN, function(){
    console.log("wipe the doors")
});
events.on(e.CLEAN, function(){
    console.log("throw the garbage")
});

events.emit('clean', {});