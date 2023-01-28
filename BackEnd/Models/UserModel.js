const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    name: String,
    email: String,
    username: String,
    password: String,
    country: String,
    checkbox: Boolean
});

const UserModel = mongoose.model('user',userSchema);

module.exports = UserModel;