const Player = require('mongoose').model('Player');

module.exports = {
    index(req, res) {
      Player.find({})
      .then(function(players) {
          res.json(players);
      })  
      .catch(function(error) {
          console.log(error);
          res.status(500).json(error);
      });
    },
}