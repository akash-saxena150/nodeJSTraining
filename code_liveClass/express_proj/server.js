var express = require('express');
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser');

var app = express();

app.use(cookieParser());

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
	res.render('index');
});
app.get('/person/:name', function(req, res) {
    res.render('person', { NAME: req.params.name, AGE: req.query.age });
});

app.post('/person', urlencodedParser, function(req, res) {
	res.send('Thank you!');
	console.log(req.body.firstname);
	console.log(req.body.lastname);
});

app.get('/api', function(req, res) {
	res.json({ firstname: 'John', lastname: 'Doe' });
});
var port = process.env.PORT || 3000;
app.listen(port);