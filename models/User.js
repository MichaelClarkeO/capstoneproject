const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        userName: {
            type: String, 
            required: [true, 'Username is required.']
        }, 
        firstName: {
            type: String, 
            required: [true, 'First name is required.']
        }, 
        lastName: {
            type: String, 
            required: [true, 'Last name is required.']
        }, 
        profileImage: {
            type: String, 
        }, 
    }, 
);

const User = mongoose.model('User', userSchema, 'User');

module.exports = User;

// {
// userName: 'miniGhost'
// }, 
// {
// firstName: 'Tariq'
// }, 
// {
// lastName: 'St. Patrick'
// }, 
// {
// profileImage: 'https://media.gettyimages.com/photos/actor-michael-rainey-jr-at-2017-ludaday-celebrity-basketball-game-at-picture-id842372238'
// } 