const mongoose = require('mongoose');

const schema = new mongoose.Schema({});
const Pokemon = mongoose.model('Pokemon', schema);

module.exports = {
  Pokemon,
};
