///////////////////////////////
// DEPENDENCIES
////////////////////////////////
require("dotenv").config();
require('./config/db.connection');
const  {PORT = 3000} = process.env;
const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const playerCtrls = require('./controller/player_controller')
const teamCtrls = require('./controller/team_controller');
const Player = require("./models/player");
///////////////////////////////
// MiddleWare
////////////////////////////////
app.use(cors()); // to prevent cors errors, open access to all origins
app.use(morgan("dev")); // logging
app.use(express.json()); // parse json bodies
app.use(express.static('public'));
app.use('/player', playerCtrls);
app.use('/team', teamCtrls);
///////////////////////////////
// ROUTES
////////////////////////////////
// create a test route

// PEOPLE CREATE ROUTE

app.post("/people", async (req, res) => {
  try {
    // send all people
    res.json(await Player.create(req.body));
    console.log(req.body)
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
});

// PEOPLE UPDATE ROUTE
app.put("/people/:id", async (req, res) => {
  try {
    // send all people
    res.json(
      await People.findByIdAndUpdate(req.params.id, req.body, { new: true })
    );
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
});

// PEOPLE DELETE ROUTE
app.delete("/people/:id", async (req, res) => {
  try {
    // send all people
    res.json(await People.findByIdAndRemove(req.params.id));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
});

///////////////////////////////
// LISTENER
////////////////////////////////
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));