'use strict';

const express = require('express');
const app = express();

app.route('/')
	.all(function(request, response, next) {
		console.log('Executed an all (' + request.method + ') methods');

		next();
	})
	.get(function(request, response) {
		response.send('Hello World!');
	})
	.post(function(request, response) {
		response.send('Responding to POST method');
	});

app.listen(3000);

console.log('Open: http://127.0.0.1/3000');