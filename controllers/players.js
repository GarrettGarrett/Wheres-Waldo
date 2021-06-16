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

//  Show - Looking for Waldo 
router.get('/:id', (req, res) => {
	Player.findById(req.params.id, (error, foundPlayer) => {
		res.render('./players/show.ejs', {
        player: foundPlayer
        });
	})
})

//  Show - Dashboard after finding Waldo
router.get('/:id/dashboard', (req, res) => {
    Player.find({}, (error, foundPlayers) => {
        Player.findById(req.params.id, (error, foundPlayer) => {
            res.render('./players/dashboard.ejs', {
            player: foundPlayer,
            allplayers: foundPlayers
            
        });
	})
})
})

//  Show - preDashboard after finding Waldo
router.get('/:id/preDashboard', (req, res) => {
	Player.findById(req.params.id, (error, foundPlayer) => {
		res.render('./players/preDashboard.ejs', {
        player: foundPlayer
        });
	})
})

// Edit -  Found Waldo 
router.put("/:id/foundWaldo", (req, res) => {
	Player.findById(req.params.id, (error, foundPlayer) => {
		Player.findByIdAndUpdate(req.params.id, { score: (Math.round((((new Date(Date.now())) - foundPlayer.startTime) / 1000) - 3))}, {new:true}, (error, foundPlayer) => { 
            res.redirect(`/${req.params.id}/Dashboard`);
			});
        });
	})

// Edit - username
router.put("/:id/edit", (req, res) => {
	Player.findById(req.params.id, (error, foundPlayer) => {
		Player.findByIdAndUpdate(req.params.id, { username: req.body.username }, {new:true}, (error, foundPlayer) => { 
			res.redirect(`/${req.params.id}/Dashboard`);
			});
        });
	})


// Exports
module.exports = router;