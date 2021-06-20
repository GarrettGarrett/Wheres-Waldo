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
            players: foundPlayers
            
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
		Player.findByIdAndUpdate(req.params.id, { score: (Math.round((((new Date(Date.now())) - foundPlayer.startTime) / 1000) - 0))}, {new:true}, (error, foundPlayer) => { 
            res.redirect(`/${req.params.id}/Dashboard`);
			});
        });
	})

// Edit -  Found Waldo Sea
router.put("/:id/foundWaldo/sea", (req, res) => {
	Player.findById(req.params.id, (error, foundPlayer) => {
		Player.findByIdAndUpdate(req.params.id, { seascore: (Math.round((((new Date(Date.now())) - foundPlayer.startTime) / 1000) - 0)), score: (Math.round((((new Date(Date.now())) - foundPlayer.startTime) / 1000) - 0)) }, {new:true}, (error, foundPlayer) => { 
            res.redirect(`/${req.params.id}/Dashboard`);
			});
        });
	})



// Edit -  Found Waldo Town
router.put("/:id/foundWaldo/town", (req, res) => {
	Player.findById(req.params.id, (error, foundPlayer) => {
		Player.findByIdAndUpdate(req.params.id, { townscore: (Math.round((((new Date(Date.now())) - foundPlayer.startTime) / 1000) - 0)), score: (Math.round((((new Date(Date.now())) - foundPlayer.startTime) / 1000) - 0)) }, {new:true}, (error, foundPlayer) => { 
            res.redirect(`/${req.params.id}/Dashboard`);
			});
        });
	})

// Edit -  Found Waldo Sea gobbler
router.put("/:id/foundWaldo/gobbling", (req, res) => {
	Player.findById(req.params.id, (error, foundPlayer) => {
		Player.findByIdAndUpdate(req.params.id, { gobblingscore: (Math.round((((new Date(Date.now())) - foundPlayer.startTime) / 1000) - 0)), score: (Math.round((((new Date(Date.now())) - foundPlayer.startTime) / 1000) - 0)) }, {new:true}, (error, foundPlayer) => { 
            res.redirect(`/${req.params.id}/Dashboard`);
			});
        });
	})

// Edit -  Found Waldo Fortress
router.put("/:id/foundWaldo/fortress", (req, res) => {
	Player.findById(req.params.id, (error, foundPlayer) => {
		Player.findByIdAndUpdate(req.params.id, { fortressscore: (Math.round((((new Date(Date.now())) - foundPlayer.startTime) / 1000) - 0)), score: (Math.round((((new Date(Date.now())) - foundPlayer.startTime) / 1000) - 0)) }, {new:true}, (error, foundPlayer) => { 
            res.redirect(`/${req.params.id}/Dashboard`);
			});
        });
	})

// Edit -  Found Waldo Foresters
router.put("/:id/foundWaldo/foresters", (req, res) => {
	Player.findById(req.params.id, (error, foundPlayer) => {
		Player.findByIdAndUpdate(req.params.id, { forestersscore: (Math.round((((new Date(Date.now())) - foundPlayer.startTime) / 1000) - 0)), score: (Math.round((((new Date(Date.now())) - foundPlayer.startTime) / 1000) - 0)) }, {new:true}, (error, foundPlayer) => { 
            res.redirect(`/${req.params.id}/Dashboard`);
			});
        });
	})

// Edit -  Found Waldo Middle Ages
router.put("/:id/foundWaldo/middleages", (req, res) => {
	Player.findById(req.params.id, (error, foundPlayer) => {
		Player.findByIdAndUpdate(req.params.id, { middleagesscore: (Math.round((((new Date(Date.now())) - foundPlayer.startTime) / 1000) - 0)), score: (Math.round((((new Date(Date.now())) - foundPlayer.startTime) / 1000) - 0)) }, {new:true}, (error, foundPlayer) => { 
            res.redirect(`/${req.params.id}/Dashboard`);
			});
        });
	})
    
// Edit -  Found Waldo Underground
router.put("/:id/foundWaldo/underground", (req, res) => {
	Player.findById(req.params.id, (error, foundPlayer) => {
		Player.findByIdAndUpdate(req.params.id, { undergroundscore: (Math.round((((new Date(Date.now())) - foundPlayer.startTime) / 1000) - 0)), score: (Math.round((((new Date(Date.now())) - foundPlayer.startTime) / 1000) - 0)) }, {new:true}, (error, foundPlayer) => { 
            res.redirect(`/${req.params.id}/Dashboard`);
			});
        });
	})

// Edit -  Found Waldo Giants
router.put("/:id/foundWaldo/giants", (req, res) => {
Player.findById(req.params.id, (error, foundPlayer) => {
    Player.findByIdAndUpdate(req.params.id, { giantsscore: (Math.round((((new Date(Date.now())) - foundPlayer.startTime) / 1000) - 0)), score: (Math.round((((new Date(Date.now())) - foundPlayer.startTime) / 1000) - 0)) }, {new:true}, (error, foundPlayer) => { 
        res.redirect(`/${req.params.id}/Dashboard`);
        });
    });
})


// Edit -  Found Waldo Movie
router.put("/:id/foundWaldo/movie", (req, res) => {
    Player.findById(req.params.id, (error, foundPlayer) => {
        Player.findByIdAndUpdate(req.params.id, { moviescore: (Math.round((((new Date(Date.now())) - foundPlayer.startTime) / 1000) - 0)), score: (Math.round((((new Date(Date.now())) - foundPlayer.startTime) / 1000) - 0)) }, {new:true}, (error, foundPlayer) => { 
            res.redirect(`/${req.params.id}/Dashboard`);
            });
        });
    })
// Edit -  Found Waldo Athletics
router.put("/:id/foundWaldo/athletics", (req, res) => {
    Player.findById(req.params.id, (error, foundPlayer) => {
        Player.findByIdAndUpdate(req.params.id, { athleticsscore: (Math.round((((new Date(Date.now())) - foundPlayer.startTime) / 1000) - 0)), score: (Math.round((((new Date(Date.now())) - foundPlayer.startTime) / 1000) - 0)) }, {new:true}, (error, foundPlayer) => { 
            res.redirect(`/${req.params.id}/Dashboard`);
            });
        });
    })

// Edit -  Found Waldo Maze
router.put("/:id/foundWaldo/maze", (req, res) => {
    Player.findById(req.params.id, (error, foundPlayer) => {
        Player.findByIdAndUpdate(req.params.id, { mazescore: (Math.round((((new Date(Date.now())) - foundPlayer.startTime) / 1000) - 0)), score: (Math.round((((new Date(Date.now())) - foundPlayer.startTime) / 1000) - 0)) }, {new:true}, (error, foundPlayer) => { 
            res.redirect(`/${req.params.id}/Dashboard`);
            });
        });
    })


// Edit -  Found Waldo Space
router.put("/:id/foundWaldo/space", (req, res) => {
    Player.findById(req.params.id, (error, foundPlayer) => {
        Player.findByIdAndUpdate(req.params.id, { spacescore: (Math.round((((new Date(Date.now())) - foundPlayer.startTime) / 1000) - 0)), score: (Math.round((((new Date(Date.now())) - foundPlayer.startTime) / 1000) - 0)) }, {new:true}, (error, foundPlayer) => { 
            res.redirect(`/${req.params.id}/Dashboard`);
            });
        });
    })

// Edit -  Found Waldo Ski
router.put("/:id/foundWaldo/ski", (req, res) => {
    Player.findById(req.params.id, (error, foundPlayer) => {
        Player.findByIdAndUpdate(req.params.id, { skiscore: (Math.round((((new Date(Date.now())) - foundPlayer.startTime) / 1000) - 0)), score: (Math.round((((new Date(Date.now())) - foundPlayer.startTime) / 1000) - 0)) }, {new:true}, (error, foundPlayer) => { 
            res.redirect(`/${req.params.id}/Dashboard`);
            });
        });
    })

// Edit -  Found Waldo Brawl
router.put("/:id/foundWaldo/brawl", (req, res) => {
    Player.findById(req.params.id, (error, foundPlayer) => {
        Player.findByIdAndUpdate(req.params.id, { brawlscore: (Math.round((((new Date(Date.now())) - foundPlayer.startTime) / 1000) - 0)), score: (Math.round((((new Date(Date.now())) - foundPlayer.startTime) / 1000) - 0)) }, {new:true}, (error, foundPlayer) => { 
            res.redirect(`/${req.params.id}/Dashboard`);
            });
        });
    })

// Edit -  Found Waldo Midieval
router.put("/:id/foundWaldo/midieval", (req, res) => {
    Player.findById(req.params.id, (error, foundPlayer) => {
        Player.findByIdAndUpdate(req.params.id, { midievalscore: (Math.round((((new Date(Date.now())) - foundPlayer.startTime) / 1000) - 0)), score: (Math.round((((new Date(Date.now())) - foundPlayer.startTime) / 1000) - 0)) }, {new:true}, (error, foundPlayer) => { 
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

// Edit - Play again 
router.put("/:id/playAgain", (req, res) => {
	Player.findById(req.params.id, (error, foundPlayer) => {
		Player.findByIdAndUpdate(req.params.id, { startTime: new Date(Date.now()), location: req.body.location }, {new:true}, (error, foundPlayer) => { 
			res.redirect(`/${req.params.id}/`);
			});
        });
	})

// Exports
module.exports = router;