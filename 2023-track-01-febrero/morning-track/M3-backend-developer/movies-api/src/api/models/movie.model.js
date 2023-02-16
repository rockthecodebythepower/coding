const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    year: {
      type: Date,
      required: false,
      trim: true,
      validate: {
        validator: (v) =>
          v instanceof Date &&
          v.getFullYear() >= 1888 &&
          v.getFullYear() <= 2200,
        message: 'Year between 1888 & 2020',
      },
      actors: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'actors',
          required: false,
        },
      ],
      teaser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'teasers',
        required: false,
      },
      tag: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'tags',
          required: false,
        },
      ],
    },
  },
  {
    timestamps: true,
  }
)

const MovieModel = mongoose.model('movies', movieSchema)

module.exports = MovieModel
