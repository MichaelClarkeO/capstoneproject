const mongoose = require("mongoose")


const CommentSchema = new mongoose.Schema({
    comment: String,
    Key: String,
    Active: Boolean,
    City: String,
    Name: String,
    LeagueID: Number,
    StadiumID: Number,
    Conference: String,
    Division: String,
  });

const Comment = mongoose.model("comment", CommentSchema, "comment" );
module.exports = Comment;