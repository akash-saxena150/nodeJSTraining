var Emitter = require('events');
var config = require('./config.json');
var tasks = new Emitter();
tasks.on(config.GREET, function(){
    console.log("I was greeted today!")
})
tasks.on(config.GREET, function(){
    console.log("I was greeted today!")
})
tasks.on(config.LEAVE, function(){
    console.log("I am on leave today!")
})
tasks.on(config.LEAVE, function(){
    console.log("Don't bother me for work!")
})

tasks.emit('greet');

