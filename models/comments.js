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

const Comment = mongoose.model("comment", CommentSchema, "comment" );
module.exports = Comment;

// [
//     {
//     profileImage: 'https://media.gettyimages.com/photos/actor-michael-rainey-jr-at-2017-ludaday-celebrity-basketball-game-at-picture-id842372238'
//     },
//     {
//     userName: 'miniGhost'
//     },
//     {
//     uploadPicture: 'https://media.gettyimages.com/photos/jayson-tatum-of-the-boston-celtics-and-actor-michael-rainey-jr-after-picture-id1238309208?s=612x612'
//     },
//     {
//     comment: 'it was great getting to see @JasonTatum in action' 
//     }
// ]