var moment = require('moment-timezone');
console.log("Hola!");
var jun = moment("2014-06-01T12:00:00Z");
console.log(jun.tz('America/Los_Angeles').format('ha z'));
console.log("Akash uses nodemon")