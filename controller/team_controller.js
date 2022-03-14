const express = require('express');
const router = express.Router();
 const Team = require('../models/team');
 
 
 router.get("/", async (req, res) => {
     try {
         res.json(await Team.find({}));
     } catch (error) {
         res.status(400).json(error);
     }
 });
 
 

 router.post("/", async (req, res, next) => {
     try {
         const Team = await Team.create(req.body);
         return res.json(Team)
     } catch (error) {
         //send error
         res.status(400).json(error);
     }
 });
 
 router.put("/:id", async (req, res) => {
     try {
         res.json(
             await Team.findByIdAndUpdate(req.params.id, req.body, { new: true })
         );
     } catch (error) {
         res.status(400).json(error);
     }
 });
 
 router.delete("/:id", async (req, res) => {
     try {
         res.json(await Team.findByIdAndRemove(req.params.id));
     } catch (error) {
         res.status(400).json(error);
     }
 });
 
 module.exports = router;