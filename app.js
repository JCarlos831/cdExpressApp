var express = require('express');
var app = express();

<<<<<<< HEAD
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
=======
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({extended: false});
>>>>>>> level4

var blocks = {
    'Fixed': 'Fastened securely in position',
    'Movable': 'Capable of being moved',
    'Rotating': 'Moving in a circle around its center'
};

<<<<<<< HEAD
app.get('/cities/:city', function(request, response) {
  var state = cities[request.cityNameFixed];
  
  if(!state){
    response.status(404).json('There are no results for ' + request.params.city);
  }else{
    response.json(state);
  }
>>>>>>> level3
=======
app.post('/blocks', parseUrlencoded, function(request, response) {
    var newBlock = request.body;
    blocks[newBlock.name] = newBlock.description;
    response.status(201).json(newBlock.name);
>>>>>>> level4
});

app.use(express.static('public'));

<<<<<<< HEAD
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
=======
app.param('name', function(request, response, next) {
    var name = request.params.name;
    var block = name[0].toUpperCase() + name.slice(1).toLowerCase();
    
    request.blockName = block;
    
    next();
>>>>>>> level4
});

app.get('/blocks', function(request, response) {
    response.json(Object.keys(blocks));
});

<<<<<<< HEAD
app.get('/date', function(request, response){
    response.send(currentDate);
>>>>>>> level3
=======
app.get('/blocks/:name', function(request, response){
    var description = blocks[request.blockName];
    
    if (!description) {
        response.status(404).json('No description found for ' + request.params.name);
    } else {
        response.json(description);
    }
    
    if (request.query.limit >= 0) {
        response.json(blocks.slice(0, request.query.limit));
    } else {
        response.json(blocks);
    }
>>>>>>> level4
});

app.listen(process.env.PORT);