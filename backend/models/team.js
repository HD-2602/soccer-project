// import mongoose module
const mongoose = require("mongoose");

const teamSchema = mongoose.Schema({
    teamName: String,
    teamStadium: String,
    teamOwner: String
});

// create Model name "Team"
const team = mongoose.model("Team", teamSchema);

// make match exportable
module.exports= team;