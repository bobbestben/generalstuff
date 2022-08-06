const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = Schema({
  //To make a unique username
  username: {type: String, required: true, unique: true},
  password: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;