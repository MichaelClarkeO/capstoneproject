const express = require('express');
const router = express.Router();
const Player = require('../models/player');


app.get("/", (req, res) => {
    res.send("hello world");
  });
  
  // PEOPLE INDEX ROUTE
  app.get("/player", async (req, res) => {
    try {
      // send all people
      const allPlayers = await Player.find().exec()
      console.log(allPlayers)
       res.json(allPlayers);
    } catch (error) {
        console.log(error);
      //send error
      res.status(400).json(error);
    }
  });