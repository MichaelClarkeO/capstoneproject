const mongoose = require("mongoose")


const PlayerTestSchema = new mongoose.Schema(
{ 
    FirstName: String,
});

const PlayerTest = mongoose.model("playerTest", PlayerTestSchema,"playerTest");
module.exports = PlayerTest;