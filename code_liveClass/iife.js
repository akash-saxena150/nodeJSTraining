'use strict'

var a = 10;
(function scopeLimiter(){
    var a = 20;
    console.log(a);
}());//Immediately Invoked Function Expression - IIFE
console.log(a);