const express = require('express');
const path = require('path')

var PORT = 3000;

var app = express();

app.use(express.static(path.join(__dirname, 'app/public')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);


app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});