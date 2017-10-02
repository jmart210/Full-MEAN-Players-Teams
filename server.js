var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    PORT = 8000;

mongoose.connect("mongodb://localhost/full_player_teams", {useMongoClient: true});
mongoose.Promise = global.Promise;


var teamSchema = new mongoose.Schema({
    name: String
});

var playerSchema = new mongoose.Schema({
    name: String,
    team: { type: mongoose.Schema.Types.ObjectId, ref:'Team' }
});

mongoose.model('Team', teamSchema);
mongoose.model('Players', playerSchema);




app.listen(PORT, function(){
    console.log(`Running on ${PORT}`);
});