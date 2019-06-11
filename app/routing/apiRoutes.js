var path = require('path');

var users = require('../data/friends');

module.exports = function (app) {

    app.get('/api/friends', function (req, res) {
        res.json(users);
    });

    app.post('/api/friends', function (req, res) {

        var user = req.body;

        for (var i = 0; i < user.scores.length; i++) {
            user.scores[i] = parseInt(user.scores[i]);
        }

        var bestFriendIndex = 0;
        var minimumDifference = 40;

        for (var i = 0; i < users.length; i++) {
            var totalDifference = 0;
            for (var j = 0; j < users[i].scores.length; j++) {
                var difference = Math.abs(user.scores[j] - users[i].scores[j]);
                totalDifference += difference;
            }

            if (totalDifference < minimumDifference) {
                bestFriendIndex = i;
                minimumDifference = totalDifference;
            }
        }

        users.push(user);

        res.json(users[bestFriendIndex]);
    });
};

    // var randomUser = users[Math.floor(Math.random()*users.length)];
    //  res.json(randomUser)
    //  console.log(randomUser)

    //  users.push(req.body);

    //  for (var i = 0; i < users.length; i++){
    //      if (randomUser === users[i]){
    //         continue;
    //      }
    //  }
//     });
// }