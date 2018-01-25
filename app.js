var express = require('express');
var app = express();
var portNum = process.env.PORT;
var currentDate = new Date();

// app.get('/', function(request, response) {
//     response.send("Hello World");
// });

app.get('/name', function(request, response) {
    response.send("Juan Montoya");
});

app.get('/redirect', function(request, response){
  response.redirect(301, '/surprise');
});

app.get('/surprise', function(request, response){
   response.send("SURPRISE!!!!");
});

app.get('/date', function(request, response){
    response.send(currentDate);
});

app.use(express.static('public'));

app.get('/cities', function(request, response){
  var cities = ['Providence', 'Warwick', 'Pawtucket', 'Central Falls', 'Cumberland'];
  if(request.query.limit >= 0){
      response.json(cities.slice(0, request.query.limit));
  } else {
      response.json(cities);
  }
});

app.get('/index', function(request, response){
    response.send();
});



app.listen(portNum);