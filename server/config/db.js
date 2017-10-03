const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const model_path = path.resolve('server', 'models');
const reg = new RegExp('.js$', 'i');

mongoose.connect('mongodb://localhost/full_players_teams', {useMongoClient: true});
mongoose.Promise = global.Promise;

mongoose.connection.on('connected', function() {
    console.log('mongoose connected');
});

process.on('SIGINT', function(){
    mongoose.connect.close(function() {
        console.log('mongoose default connection disconnected through program termination');
        process.exit(0);
    });
});

fs.readdirSync(model_path).forEach(function(file) {
    if(reg.test(file)) {
        require(path.join(model_path, file));
    }
})