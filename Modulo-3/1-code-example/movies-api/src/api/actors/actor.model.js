const mongoose = require('mongoose')

const actorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    age: { type: Number, required: true, trim: true },
    img: { type: String, trim: true, required: true }
  },
  {
    timestamps: true,
  }
)

const Actor = mongoose.model('actors', actorSchema)

module.exports = Actor