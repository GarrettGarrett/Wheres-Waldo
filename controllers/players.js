// I.N.D.U.C.E.S (Index, New, Delete, Create, Edit, Show)

// Dependencies
const router = require('express').Router();
const Player = require('../models/player.js');
const rug = require('random-username-generator'); 
const random_user = rug.generate();

// Home Route
router.get('/' , (req, res) => {
    Player.find({}, (err, foundPlayers) => {
		res.render('index.ejs',  {
			players: foundPlayers,
            randomUser: rug.generate(),
    })
  });
});

// Delete - user
router.delete('/:id/Dashboard', (req, res) => {
	Player.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect('/');
    });
});

//  Create a new player
router.put("/createPlayer", (req, res) => {
    Player.create(req.body, (err, createdPlayer) => {
        res.redirect(`/${createdPlayer._id}/`);
        
    });
});


// Exports
module.exports = router;