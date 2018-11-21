var Game = require('./models.js')
var ObjectId = require('mongodb').ObjectID;

module.exports = {
    showAll: function(req, res) {
        Game.find({}, function(err, games){
         if (err) {
             console.log(err);
             res.json({message: "Error", error: err})
         } else {
             console.log(games);
             res.json({ message: "Success", data: games})
         }
        })
     },
     add: function(req, res) {
         var game = new Game(req.body);
         game.save(function(err){
             if (err){
                 console.log(err);
                 res.json({message: "Error", error: err})
             } else {
                res.json({message: "Successfully added", body: req.body})
             }
         })
     },
     details: function(req, res) {
        Game.find({_id: ObjectId(req.params.id)}, function(err, games){
            if (err) {
                console.log(err);
                res.json({message: "Error", error: err})
            } else {
                console.log(games);
                res.json({ message: "Success", data: games })
            }
        })
    },
    addRating: function(req, res) {
        Game.findOne({_id: ObjectId(req.params.id)},function (err, game){
            if (err) {
                console.log(err);
                res.json({message: "Error", error: err})
            } else {
                console.log("!!!!!!");
                console.log(game);
                var Thegame  = game;
            } 
            Thegame.ratings.push(req.body);
            Thegame.save(function(err){
                if (err){
                    console.log(err);
                } else {
                    console.log("added rating");
                }
            })
        }).up
    },
    destroy_everything: function(req, res){
        Game.deleteMany({}, function(err){
            console.log(err);
            res.json({message: "Error", error: err})
        });
        res.json({ message: "All data destroyed"})
    }
}