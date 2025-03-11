const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    userAge: {
        type: Number,
        required: true
    },
    userEmail: {
        type: String,
        required: true
    },
    userSex: {
        type: String,
        enum: ['man', 'woman']
    }
});
const User = mongoose.model('User', userSchema);
module.exports = User;