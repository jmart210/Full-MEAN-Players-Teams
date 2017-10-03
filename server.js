var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    path = require("path"),
    PORT = 8000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'client')));
require(path.resolve('server', 'config', 'routes'))(app);


// SCHEMAS AND MODELS


// var TeamSchema = new mongoose.Schema({
//     name: String
// });

// var PlayerSchema = new mongoose.Schema({
//     name: String,
//     team: { type: mongoose.Schema.Types.ObjectId, ref:'Team' }
// });

// var Team = mongoose.model('Team', TeamSchema);
// var Player = mongoose.model('Player', PlayerSchema);


// PLAYER CONTROLLER
var PlayerController = {
    index: function(req, res){
        Player.find({})
        .populate('team')
        .exec(function(err, players){
            if(err){
                console.log(err);
                res.status(500);
                res.json(err);
            } else {
                res.json(players);
            }
        });
    },
    create: function(req, res){
        Player.create(req.body, function(err){
            if(err){
                console.log(err);
                res.status(500);
                res.json(err);
            } else {
                res.json(true);
            }
        });
    },
    delete: function(req, res){
        Player.remove({_id: req.params.id })
        .then(function(){
            res.json(true);
        })
        .catch(function(err){
            console.log(err);
            res.status(500);
            res.json(err);
        });
    },
    update: function(req, res){
        Player.update({ _id: req.params.id }, req.body)
        .then(function(){
            res.json(true);
        })
        .catch(function(err){
            console.log(err);
            res.status(500);
            res.json(err);
        });
    },
}

// Team CONTROLLER
var TeamController = {
    index: function(req, res){
        Team.find({}, function(err, teams){
            if(err){
                console.log(err);
                res.status(500);
                res.json(err);
            } else {
                res.json(teams);
            }
        });
    },
    create: function(req, res){
        Team.create(req.body, function(err){
            if(err){
                console.log(err);
                res.status(500);
                res.json(err);
            } else {
                res.json(true);
            }
        });
    },
    delete: function(req, res){
        Team.remove({_id: req.params.id })
        .then(function(){
            res.json(true);
        })
        .catch(function(err){
            console.log(err);
            res.status(500);
            res.json(err);
        });
    },
}


// ROUTING
// Players
app.get('/players', PlayerController.index);
app.post('/players', PlayerController.create);
app.delete('/players/:id', PlayerController.delete);
app.put('/players/:id', PlayerController.update);



// Teams 
app.get('/teams', TeamController.index);
app.post('/teams', TeamController.create);
app.delete('/teams/:id', TeamController.delete);



app.listen(PORT, function(){
    console.log(`Running on ${PORT}`);
});