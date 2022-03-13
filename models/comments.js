const mongoose = require("mongoose")

const CommentSchema = new mongoose.Schema(
    {
        profileImage: {
            type: String, 
        },
        userName: {
            type: String, 
            required: [true, 'Username is required.']
        }, 
        uploadPicture: {
            type: String, 
        }, 
        comment: {
            type: String, 
            required: [true, 'Comment is required.']
        } 
    }, 
);

const Comment = mongoose.model("Comment", CommentSchema);
module.exports = Comment;

