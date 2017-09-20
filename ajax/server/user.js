const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  email: {
    required: true,
    type: String,
    unique: true,
    minLength: 1,
    trim: true,
  },
  username: {
    type: String
  }
})

const User = mongoose.model('User', UserSchema)

module.exports = {User}
