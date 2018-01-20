var express = require('express');
var app = express();
var portNum = process.env.PORT;
var currentDate = new Date();

app.get('/', function(request, response) {
    response.send("Hello World");
});

app.get('/name', function(request, response) {
    response.send("Juan Montoya");
});

app.get('/redirect', function(request, response){
  response.redirect(301, '/surprise');
});

app.get('/', function(request, response){
    response.send(currentDate);
});

app.listen(portNum);