var express = require('express');
var app = express();
var portNum = process.env.PORT;
var currentDate = new Date();

app.use(express.static('public'));

var cityRoutes = require('./routes/cityRoutes');
app.use('/cities', cityRoutes);
  
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