const express = require('express');
const app = express();

app.all('/', function(request, response, next) {
	console.log('Executed an all(' + request.method + ') methods');

	next();
});

app.get('/about', function(request, response) {
	response.send('About Page');
});

// as many oooo's as you wish
app.get('/bo+o', function(request, response) {
	response.send('Boo Page');
});

// all ending in 'ula'
app.get(/.*ula$/, function(request, response) {
	response.send('Page ending in -ula');
});

// multiple callbacks for handling a route
// useful scenario: checking what user has logged in
app.get('/multiple', function(request, response, next) {
	response.user = 'Andrew';

	next();
}, function(request, response) {
	response.send('Hello ' + response.user);
});

// modify the request/response before handling it!
app.get('/skip', function(request, response, next) {
	console.log('Will skip the rest');

	next('route');
}, function(request, response) {
	response.send('Never called!');
});

app.listen(3000);

console.log('Open: http://127.0.0.1/3000');