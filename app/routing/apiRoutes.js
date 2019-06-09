var path = require('path');

var users = require('../data/friends');

module.exports = function(app) {

	app.get('/api/friends', function(req, res) {
		res.json(users);
    });

    app.post('/api/friends', function(req, res) {
 
    var randomUser = users[Math.floor(Math.random()*users.length)];
     res.json(randomUser)
     console.log(randomUser)

     users.push(req.body);

     for (var i = 0; i < users.length; i++){
         if (randomUser === users[i]){
            continue;
         }
     }
    });
}