const mongoose = require("mongoose")


const PlayerSchema = new mongoose.Schema(
{ 
    PlayerID: Number,
    Status: String,
    TeamID: Number,
    Team: String,
    Jersey: Number,
    PositionCategory: String,
    Position: String,
    FirstName: String,
    LastName: String,
    Height: Number,
    Weight: Number,
    BirthDate: String,
    BirthCity: String,
    BirthState: String,
    BirthCountry: String,
    HighSchool: String,
    College: String,
    Salary: Number,
    PhotoUrl: String,
    Experience: Number,
    NbaDotComPlayerID: Number,
    team: {
    type: mongoose.Types.ObjectId,
    ref: 'Team',
},
},
);

const Player = mongoose.model("Player", PlayerSchema);
module.exports = Player;


