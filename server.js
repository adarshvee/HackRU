var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('./api/models/myModel'), //created model loading here
  Question = require('./api/models/questionListSchema'),
  Question = require('./api/models/answersModel'),
  bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
var con1 = mongoose.connect('mongodb://localhost/Questiondb');
//mongoose.connect('mongodb://localhost/Answersdb');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/questionRoutes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('Career counseling middleware RESTful API server started on: ' + port);
