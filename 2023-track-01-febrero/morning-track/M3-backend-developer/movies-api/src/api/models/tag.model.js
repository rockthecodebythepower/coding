const mongoose = require('mongoose')

const tagSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
)

const tagModel = mongoose.model('tags', tagSchema)

module.exports = tagModel
