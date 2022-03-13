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

const User = mongoose.model('User', userSchema);

module.exports = User;

