var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({ extended: false });

var cities = {
    'Providence': 'Rhode Island', 
    'Boston': 'Massachusetts',
    'Portland': 'Maine',
    'Austin': 'Texas',
    'Oakland': 'California'
  };
  
  router.route('/')
    .get(function(request, response){
      if(request.query.limit > cities.length){
      response.status(404).json("Error");
    } else if(request.query.limit > 0) {
      response.json(Object.keys(cities).slice(0, request.query.limit));
    } else {
      response.json(Object.keys(cities));
    }
  })
  .post(parseUrlencoded, function(request, response){
    if(request.body.city.length > 4 && request.body.state.length > 2){
    var newCity = request.body;
    cities[newCity.city] = newCity.state;
    response.status(201).json(newCity.name);
    }
  });
  
  router.route('/:city')
    .all(function(request, response, next){
    var city = request.params.city;
    var cityName = city[0].toUpperCase() + city.slice(1).toLowerCase();
  
    request.cityNameFixed = cityName;
  
    next();
    })
    .get(function(request, response) {
    var state = cities[request.cityNameFixed];
    
    if(!state){
      response.status(404).json('There are no results for ' + request.params.city);
    }else{
      response.json(state);
    }
  })
    .delete(function(request, response){
    delete cities[request.cityNameFixed];
    response.sendStatus(200);
  });

module.exports = router;