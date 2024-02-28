const mongoose = require('mongoose');
const {
    Schema,
    model
} = mongoose;

const UserSchema = new Schema({
    name: String,
    password: String,
    avatar: {}
});

const User = model('User', UserSchema);
module.exports = User;