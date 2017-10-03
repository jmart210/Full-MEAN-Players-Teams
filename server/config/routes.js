module.exports = function(app) {
    app.get('/players', function(req, res){
        res.json({ players: []});
    });
}