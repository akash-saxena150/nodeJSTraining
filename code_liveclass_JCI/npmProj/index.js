var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var port = process.env.PORT || 3000;
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();

app.set('view engine', 'ejs');
app.use('/assets', express.static(__dirname + '/public'));
app.use('/', function (req, res, next) {
    console.log('Request Url:' + req.url);
    next();
});

app.use('/person', function (req, res, next) {
    console.log('Request Url:' + req.url + (new Date()));
    next();
});

app.get('/', function(req, res) {
	res.render('index');
});

app.get('/person/:id/:name', function(req, res) {
    console.log(req.params);
	res.render('person', {ID: req.params.id});
});

app.post('/person', urlencodedParser, function(req, res) {
	res.send('Thank you!');
    console.log(req.body.firstname);
    console.log(req.body.lastname);
});

app.post('/personjson',jsonParser, function(req, res) {
	res.send('Thank you for the JSON data!');
	console.log(req.body);
	console.log(req.body);
});
app.listen(port);