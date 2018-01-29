var express = require('express');
var app = express();
var portNum = process.env.PORT;

app.use(express.static('public'));

app.get('/cities', function(request, response) {
  var cities = ['Providence', 'Boston', 'Portland', 'San Diego', 'Austin'];
  if(request.query.limit > cities.length){
    response.status(404).json("Error");
  } else if(request.query.limit > 0) {
    response.json(cities.slice(0, request.query.limit));
  } else {
    response.json(cities);
  }
});

app.listen(portNum);