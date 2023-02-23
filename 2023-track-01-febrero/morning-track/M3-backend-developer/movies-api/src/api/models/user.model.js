const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const userSchema = new mongoose.Schema({
  password: {
    type: String,
    trim: true,
    required: true,
    minlength: [8, 'Password min 8 characters'],
  },
  mail: {
    type: String,
    trim: true,
    required: true,
    validate: [validator.isEmail, 'Email is not valid'],
  },
  favMovies: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'movies',
      required: false,
    },
  ],
  petName: {
    type: String,
    trim: true,
    required: true,
    minlength: [1, 'Pet name min 1 characters'],
  },
})

userSchema.pre('save', async function (next) {
  try {
    this.password = await bcrypt.hash(this.password, 8)
    next()
  } catch (error) {
    next(error.message)
  }
})

const User = mongoose.model('users', userSchema)

module.exports = User
