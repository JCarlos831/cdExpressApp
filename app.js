var express = require('express');
var app = express();
var portNum = process.env.PORT;
var currentDate = new Date();
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({ extended: false });

app.use(express.static('public'));

var cities = {
    'Providence': 'Rhode Island', 
    'Boston': 'Massachusetts',
    'Portland': 'Maine',
    'Austin': 'Texas',
    'Oakland': 'California'
  };
  
app.delete('/cities/:city', function(request, response){
  delete cities[request.cityNameFixed];
  response.sendStatus(200);
});

app.post('/cities', parseUrlencoded, function(request, response){
  if(request.body.city.length > 4 && request.body.state.length > 2){
  var newCity = request.body;
  cities[newCity.city] = newCity.state;
  response.status(201).json(newCity.name);
  }
});
  
app.param('city', function(request, response, next){
  var city = request.params.city;
  var cityName = city[0].toUpperCase() + city.slice(1).toLowerCase();
  
  request.cityNameFixed = cityName;
  
  next();
});

app.get('/cities', function(request, response){
    if(request.query.limit > cities.length){
    response.status(404).json("Error");
  } else if(request.query.limit > 0) {
    response.json(Object.keys(cities).slice(0, request.query.limit));
  } else {
    response.json(Object.keys(cities));
  }
});

app.get('/cities/:city', function(request, response) {
  var state = cities[request.cityNameFixed];
  
  if(!state){
    response.status(404).json('There are no results for ' + request.params.city);
  }else{
    response.json(state);
  }
});

app.get('/name', function(request, response) {
    response.send("Juan Montoya");
});

app.get('/redirect', function(request, response){
  response.redirect(301, '/surprise');
});

app.get('/surprise', function(request, response){
    response.send("SURPRISE!!!");
});

app.get('/date', function(request, response){
    response.send(currentDate);
});

app.listen(portNum);