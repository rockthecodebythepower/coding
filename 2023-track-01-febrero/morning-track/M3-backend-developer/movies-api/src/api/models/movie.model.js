const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    year: { type: String, required: true, trim: true },
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
    tags: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'tags',
        required: false,
      },
    ],
    poster: { type: String, trim: true, required: false },
  },
  {
    timestamps: true,
  }
)

const MovieModel = mongoose.model('movies', movieSchema)

module.exports = MovieModel
