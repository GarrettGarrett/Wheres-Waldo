// Dependencies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Schema
const playerSchema = new Schema({
    username: String,
    score: String,
    seascore: String,
    gobblingscore: String,
    townscore: String,
    fortressscore: String,
    middleagesscore: String,
    undergroundscore: String,
    giantsscore: String,
    moviescore: String,
    athleticsscore: String,
    mazescore: String,
    spacescore: String,
    skiscore: String,
    brawlscore: String,
    midievalscore: String,
    startTime: Date,
    endTime: Date,
    location: String
}, {
    timestamps: true
});


// compile schema into a model
const Player = mongoose.model('Player', playerSchema); 

//  export the model 
module.exports = Player; 