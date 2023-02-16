const mongoose = require('mongoose')

const actorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    age: {
      type: Number,
      required: true,
      trim: true,
    },
    tag: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'tags',
        required: false,
      },
    ],
  },
  {
    timestamps: true,
  }
)

const ActorModel = mongoose.model('actors', actorSchema)

module.exports = ActorModel
