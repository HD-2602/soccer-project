// import mongoose module
const mongoose = require("mongoose");

const playerSchema = mongoose.Schema({
    nbr: Number,
    age: Number,
    name: String,
    position: String
});

// create Model name "Player"
const player = mongoose.model("Player", playerSchema);

// make player exportable
module.exports= player;
