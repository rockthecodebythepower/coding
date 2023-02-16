const mongoose = require('mongoose')

const teaserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    timeSec: {
      type: Number,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
)

const sceneModel = mongoose.model('teasers', teaserSchema)

module.exports = sceneModel
