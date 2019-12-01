var express = require('express'),
  app = express(),
  port = process.env.PORT || 1907,
  mongoose = require('mongoose'),
  EQ = require('./api/models/eqarthQuakeModel'), //created model loading here
  bodyParser = require('body-parser');


// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/EarthQuakeDB'); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/eqarthQuakeRoute'); //importing route
routes(app); //register the route






app.listen(port);

console.log('todo list RESTful API server started on: ' + port);