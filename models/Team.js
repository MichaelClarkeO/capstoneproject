const mongoose = require("mongoose")

const TeamSchema = new Schema({
    TeamID: Number,
    Key: String,
    Active: Boolean,
    City: String,
    Name: String,
    LeagueID: Number,
    StadiumID: Number,
    Conference: String,
    Division: String,
  });

const Team = mongoose.model("Team", TeamSchema);
module.exports = Team;