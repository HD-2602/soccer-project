// import mongoose module
const mongoose = require("mongoose");
// import mongoose unique validator
const uniqueValidator= require ("mongoose-unique-validator");


const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: { type: String, unique: true },
    pwd: String,
    avatar : String,
    role : String
});


userSchema.plugin(uniqueValidator);

// create Model name "User"
const user = mongoose.model("User", userSchema);

// make user exportable
module.exports= user;