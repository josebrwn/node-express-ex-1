// deals.js

var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var dealRouter = require('dealRouter');

var hostname = 'localhost';
var port = 3000;

var app = express();

app.use(morgan('dev'));

app.use('/deals',dealRouter);

app.use(express.static(__dirname + '/public'));

app.listen(port, hostname, function(){
  console.log(`Server running at http://${hostname}:${port}/`);
});

// {"name": "gorilla", "description": "king of the jungle"}