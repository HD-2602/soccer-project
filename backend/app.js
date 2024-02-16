// Import Express Modul
const express = require("express");
// Import bodyparser module
const bodyParser = require("body-parser");
// Import bcrypt module
const bcrypt = require("bcrypt");
// Import multer module
const multer = require("multer");
// Import path module
const path = require("path");
// Import axios module
const axios = require("axios");

// Import mongoose module
const mongoose = require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/houdaDB');

// Import jsonwebtoken module
const jwt = require('jsonwebtoken');
// Import express-session module
const session = require('express-session');

// Create Express Application
const app = express();

// Models Importation
const Match = require("./models/match");
const Team = require("./models/team");
const User = require("./models/user");
const Player = require("./models/player");

// Application Config
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Security Config 
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, Accept, Content-Type, X-Requested-with, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, DELETE, OPTIONS, PATCH, PUT"
  );
  next();
});

// Session Configuration
// Génération du Token et le décodage bech ysir bia secretKey
const secretKey = 'croco23';
app.use(
  session({
    secret: secretKey,
  })
);


// ShortCut 
app.use("/myFiles", express.static(path.join("backend/images")));
// Media Types
const MIME_TYPE = {
  'image/png': 'png',
  'image/jpeg': 'jpg',
  'image/jpg': 'jpg'
}
//  Multer config
const storageConfig = multer.diskStorage({
  // destination
  destination: (req, file, cb) => {
    const isValid = MIME_TYPE[file.mimetype];
    let error = new Error("Mime type is invalid");
    if (isValid) {
      error = null;
    }
    cb(null, 'backend/images')
  },
  // filename
  filename: (req, file, cb) => {
    const name = file.originalname.toLowerCase().split(' ').join('-');
    const extension = MIME_TYPE[file.mimetype];
    const imgName = name + '-' + Date.now() + '-crococoder-' + '.' +
      extension;
    cb(null, imgName);
  }
});

// Business Logic: Get all matches
app.get("/api/matches", (req, res) => {
  Match.find().then((docs) => {
    res.status(200).json({ matches: docs, message: "ok" });
  });
});

// Business Logic: Get Match By Id
app.get("/api/matches/:x", (req, res) => {
  let id = req.params.x;
  Match.findOne({ _id: id }).then((doc) => {
    res.json({ match: doc });
  });
});

// Business Logic: Delete Match By Id
app.delete("/api/matches/:id", (req, res) => {
  let id = req.params.id;
  Match.deleteOne({ _id: id }).then((result) => {
    console.log("Here response after delete", result);
    result.deletedCount == 1
      ? res.json({ msg: "Delete with success" })
      : res.json({ msg: "Not Delete" });
  });
});

// Business Logic: Add Match 
app.post("/api/matches", (req, res) => {
  let obj = new Match(req.body);
  obj.save();
  res.status(200).json({ message: "Added with Success" });
});

// Business Logic: Edit Match 
app.put("/api/matches", (req, res) => {
  let newMatch = req.body;
  Match.updateOne({ _id: newMatch._id }, newMatch).then((result) => {
    result.nModified == 1 ?
      res.status(200).json("Edit with Success")
    : res.status(200).json("Echec");
  });
});

// BL: search matches By scoreOne Or scoreTwo
app.post("/api/matches/searchMatches", (req, res) => {
  console.log("Here object BE", req.body);
  Match.find({
    $or: [{ scoreOne: req.body.scoreOne }, { scoreTwo: req.body.scoreTwo }]
  }).then((docs) => {
    res.json({ findedMatches: docs, msg: "Done" });
  });
});

// BL: search Weather from API
app.get("/api/weather/:city", (req, res) => {
  let key = "";
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${req.params.city}&appid=${key}&units=metric`;
  axios.get(apiURL).then((weatherResponse) => {
    console.log("Here response from API", weatherResponse);
    let data= weatherResponse.data;
    console.log("Data", data);
    let description = data.weather[0].description;
    let icon = data.weather[0].icon;
    let result= {
      temperature: data.main.temp,
      pressure: data.main.pressure,
      humidity: data.main.humidity,
      icon: `https://openweathermap.org/img/wn/${icon}@2x.png`,
      description: description,
      sunrise: new Date(data.sys.sunrise * 1000),
      sunset: new Date(data.sys.sunset * 1000)
    };
    res.json({ result : result}) ;
  });
});

// BL: AddPlayer
app.post("/api/players", (req,res)=>{
console.log("Here into BL: Add Player", req.body);
let p = new Player(req.body);
p.save();
res.json({msg: "Add with Success"});
});

// BL: Get all players
app.get("/api/players", (req, res) => {
  Player.find().then((docs) => {
    res.status(200).json({ playersTab: docs });
  });
});

// BL: Get player By Id
app.get("/api/players/:id", (req, res) => {
  Player.findOne({ _id: req.params.id }).then((doc) => {
    res.status(200).json({ player: doc });
  });
});

// BL: Delete player By Id
app.delete("/api/players/:id", (req, res) => {
  console.log("Here inti BL: delete players by id", req.params.id);
  Player.deleteOne({ _id: req.params.id }).then((response) => {
    response.deletedCount == 1 ?
     res.status(200).json({ isDeleted: true })
    : res.status(200).json({ isDeleted: false });
  });
});

// BL: Edit player
app.put("/api/players", (req, res) => {
  console.log("Here into BL: UpDate Player", req.body);
Player.updateOne({_id: req.body._id}, req.body).then(
  (response)=>{
    if (response.nModified == 1) {
      res.json({msg: "OK"});
    } else {
      res.json({msg: "Not OK"});
    }
}); 
});

// BL: Get all teams
app.get("/api/teams", (req, res) => {
  Team.find().then((docs) => {
    res.status(200).json({ teams: docs, message: "ok" });
  });
});

// BL: Get team By Id
app.get("/api/teams/:x", (req, res) => {
  let id = req.params.x;
  Team.findOne({ _id: id }).then((doc) => {
    res.status(200).json({ team: doc });
  });
});

// BL: Delete Team
app.delete("/api/teams/:y", (req, res) => {
  let id = req.params.y;
  Team.deleteOne({ _id: id }).then((result) => {
    result.deletedCount == 1 ?
      res.status(200).json({ message: "Delete with success" })
    : res.status(200).json({ message: "Not Delete" });
  });
});

// BL: Add Team
app.post("/api/teams", (req, res) => {
  let teamObj = new Team({
    teamName: req.body.name,
    teamStadium: req.body.stadium,
    teamOwner: req.body.owner
  });
  teamObj.save((err, doc) => {
    (err) ?
      res.json({ msg: "Error" })
    : res.json({ msg: "Added with success" });
  });
});

// BL: Edit Team
app.put("/api/teams", (req, res) => {
  let newTeam = req.body;
  Team.updateOne({ _id: newTeam._id }, {
    teamName: newTeam.name,
    teamStadium: newTeam.stadium,
    teamOwner: newTeam.owner
  }).then((result) => {
    result.nModified == 1 ?
      res.json({ msg: "Edit with Success" })
    : res.json({ msg: "Not Edit" });
  });
});

// BL: SignUp
app.post("/api/users/signup", multer({ storage: storageConfig }).single('img'), (req, res) => {
  console.log("Here into signup", req.body);
  bcrypt.hash(req.body.pwd, 8).then((cryptedPwd) => {
    req.body.pwd = cryptedPwd;
    req.body.avatar = `${req.protocol}://${req.get("host")}/myFiles/${req.file.filename}`;
    let user = new User(req.body);
    user.save((err, doc) => {
     if (err) {
     if (err.errors.email) {
      res.json({ msg: "0" });
     }
     } else {
      res.json({ msg: "1" });
     }
    });
  });
});

// BL: Login
app.post("/api/users/login", (req, res) => {
  console.log("Here into login", req.body);
  let user;
  User.findOne({ email: req.body.email })
    .then((doc) => {
      console.log("Here doc", doc);
      user = doc;
      if (!doc) {
       // Send Email Error Msg
        res.json({ msg: "0" });
      } else {
        // Check PWD
        return bcrypt.compare(req.body.pwd, doc.pwd);
      }
    })
    .then((isEqual) => {
      console.log("Here is equal", isEqual);
      // Send Pwd Error msg
      if (!isEqual) {
        res.json({ msg: "1" });
      } else {
        let userToSent = {
          userId: user._id,
          email: user.email,
          fName: user.firstName,
          lName: user.lastName,
          role : user.role
        };
        const token = jwt.sign(userToSent , secretKey, { expiresIn:'1h' });
        res.json({ user: token, msg: `2` });
      }
    });
});
// _________________________________________________________________________________________________________
// BL: Get all Users
app.get("/api/users", (req, res) => {
  // console.log("here into BL: Get all users");
  User.find().then((docs) => {
    res.status(200).json({ users: docs, message: "ok" });
  });
});

// BL: Get User By Email
app.get("/api/users/:email", (req,res)=>{
console.log("Here into BL: get profile", req.params.email);
User.findOne({ email: req.params.email }).then((doc)=>{
  res.json({ user: doc });
});
});

// BL: Edit Profile
app.put("/api/users", (req,res)=>{
  console.log("Here into BL: Edit user", req.body);
  User.updateOne({_id: req.body._id}, req.body).then((this.response)).then(
    (response)=>{
      if (response.nModified == "1") {
        res.json({ msg: "Updated with success"});
      } else {
        res.json({ msg: "Error"});
      }
    });
});

// Make Application Exportable
module.exports = app;


