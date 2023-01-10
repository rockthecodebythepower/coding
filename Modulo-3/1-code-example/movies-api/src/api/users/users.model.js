const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('mongoose-unique-validator')

const userSchema = new mongoose.Schema(
  {
    name: { type: String, trim: true, required: true },
    emoji: { type: String, trim: true, required: true },
    password: {
      type: String, trim: true, required: true,
      maxlength: [12, 'Máx lenght 12 characters'],
      minlength: [8, 'Min lenght 8 characters']
    },
    email: {
      type: String, trim: true, required: true, unique: [true, 'this email already exist'],
      match: [/.+\@.+\..+/, 'email not valid']
    }
  },
  {
    timestamps: true,
  })

userSchema.plugin(validator, { message: 'Error create user' })
userSchema.pre("save", function (next) {
  this.password = bcrypt.hashSync(this.password, 10)
  next();
});


const User = mongoose.model('users', userSchema)

module.exports = User