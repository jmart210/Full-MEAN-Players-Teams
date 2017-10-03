const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PlayerSchema = new Schema({
    name: {
        type: String,
        required: [true, 'must provide some info'],
        trim: true,

    }
    _team: {
        type: Schema.Types.ObjectID,
        ref: 'Team'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Player', PlayerSchema);