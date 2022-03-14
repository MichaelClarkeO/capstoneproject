const express = require("express");
const router = express.Router();
const Comment = require('../models/Comments')

router.get("/", async (req, res) => {
    try {
        res.json(await Comment.find({}));
    } catch (error) {
        res.status(400).json(error);
    }
});


// Comment CREATE ROUTE
router.post("/", async (req, res, next) => {
    try {
        const comment = await Comment.create(req.body);
        console.log(comment);
        return res.status(200).json(Comment)
    } catch (error) {
        //send error
        console.log(error)
        res.status(400).json(error);
    }
});

router.put("/:id", async (req, res) => {
    try {
        res.json(
            await Comment.findByIdAndUpdate(req.params.id, req.body, { new: true })
        );
    } catch (error) {
        res.status(400).json(error);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        res.json(await Comment.findByIdAndRemove(req.params.id));
    } catch (error) {
        res.status(400).json(error);
    }
});

module.exports = router;