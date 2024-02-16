// import mongoose module
const mongoose = require("mongoose");

const matchSchema = mongoose.Schema({
    scoreOne: Number,
    scoreTwo: Number,
    teamOne: String,
    teamTwo: String
});

// create Model name "Match"
const match = mongoose.model("Match", matchSchema);

// make match exportable
module.exports= match;
