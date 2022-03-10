const express = require('express');
const router = express.Router();
 const Player = require('../models/player');
 
 router.get("/", async (req, res) => {
     try {
 
         res.json(await Player.find({}));
     } catch (error) {
 
         res.status(400).json(error);
     }
 });

 
 // Player CREATE ROUTE
 router.post("/", async (req, res, next) => {
     try {
         const Player = await Player.create(req.body);
         return res.json(Player)
     } catch (error) {
         //send error
         res.status(400).json(error);
     }
 });
 
 router.put("/:id", async (req, res) => {
     try {
 
         res.json(
             await Player.findByIdAndUpdate(req.params.id, req.body, { new: true })
         );
     } catch (error) {
 
         res.status(400).json(error);
     }
 });
 
 router.delete("/:id", async (req, res) => {
     try {
 
         res.json(await Player.findByIdAndRemove(req.params.id));
     } catch (error) {
 
         res.status(400).json(error);
     }
 });
 
 module.exports = router;