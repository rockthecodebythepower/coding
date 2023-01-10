const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    year: { type: Number, required: true, trim: true },
    actors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'actors' }]
  },
  {
    timestamps: true,
  }
)

const Movie = mongoose.model('movies', movieSchema)
module.exports = Movie