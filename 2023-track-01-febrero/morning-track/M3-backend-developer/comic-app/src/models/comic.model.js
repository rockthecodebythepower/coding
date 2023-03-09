const mongoose = require("mongoose");

const Schema = mongoose.Schema;

/* This is creating a new schema for the Comic model. */
const comicSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Comic", comicSchema);