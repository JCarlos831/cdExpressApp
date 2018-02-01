var express = require('express');
var app = express();
var portNum = process.env.PORT;
var currentDate = new Date();

app.use(express.static('public'));

<<<<<<< HEAD
app.get('/name', function(request, response) {
    response.send("Juan Montoya");
});

app.get('/redirect', function(request, response){
  response.redirect(301, '/surprise');
});

app.get('/surprise', function(request, response){
<<<<<<< HEAD
   response.send("SURPRISE!!!");
=======
    response.send("SURPRISE!!!");
>>>>>>> level2
});

app.get('/date', function(request, response){
    response.send(currentDate);
=======
var cities = {
    'Providence': 'Rhode Island', 
    'Boston': 'Massachusetts',
    'Portland': 'Oregon',
    'San Diego': 'California',
    'Austin': 'Texas'
  };
  
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
>>>>>>> level3
});

app.get('/name', function(request, response) {
    response.send("Juan Montoya");
});

<<<<<<< HEAD
app.get('/cities', function(request, response){
  var cities = ['Providence', 'Warwick', 'Pawtucket', 'Central Falls', 'Cumberland'];
  response.json(cities);
});

app.get('/index', function(request, response){
    response.send();
=======
app.get('/redirect', function(request, response){
  response.redirect(301, '/surprise');
});

app.get('/surprise', function(request, response){
    response.send("SURPRISE!!!");
});

app.get('/date', function(request, response){
    response.send(currentDate);
>>>>>>> level3
});

app.listen(portNum);