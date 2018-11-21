var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/basic_mongoose', (err)=>{
    console.log(err);
});

ratingSchema = new mongoose.Schema({
    stars: Number,
    comment: String,
})

var GameSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength:2, unique:true},
    url: {type: String, required: true, minlength:3},
    players: {type: Number},
    minage: {type: Number},
    genre: {type: String, require:true},
    moreinfo: {type: String},
    updatedAt: {type: Date, default: Date.now},
    createdAt: {type: Date, default: Date.now},
    ratings: [ratingSchema]
});
module.exports = mongoose.model("Game", GameSchema);