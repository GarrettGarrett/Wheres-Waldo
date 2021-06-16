// Dependencies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Schema
const playerSchema = new Schema({
    username: String,
    score: String,
    startTime: Date,
    endTime: Date
}, {
    timestamps: true
});


// compile schema into a model
const Player = mongoose.model('Player', playerSchema); 

//  export the model 
module.exports = Player; 