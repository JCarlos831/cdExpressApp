var express = require('express');
var app = express();
var portNum = process.env.PORT;

app.use(express.static('public'));

var cities = {
      'Providence': 'Rhode Island',
      'Boston': 'Massachusetts',
      'Portland': 'Maine',
      'San Diego': 'California',
      'Houston' : 'Texas'
  };
  
app.get('/cities/:name', function(request, response){
    var description = cities[request.params.name];
    response.json(description);
});

app.listen(portNum);