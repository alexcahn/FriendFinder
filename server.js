var express = require('express');
// var path = require("path");
var bodyParser = require("body-parser")
var app = express();

var PORT = 3000;

app.use(express.static('app/public'));
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);


app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});