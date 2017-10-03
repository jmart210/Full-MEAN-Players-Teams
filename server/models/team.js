const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const TeamSchema = new Schema({
    name : {
        type: String,
        trim: true,
        required: [true, 'Must supply a team name']
    },
    _players: [
        {
            type: Schema.Types.ObjectID,
            ref: 'Player'
        }
    ]
}, {
    timestamps: true
});


module.exports = mongoose.model('Team', TeamSchema);