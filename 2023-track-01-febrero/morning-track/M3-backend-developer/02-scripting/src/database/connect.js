const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

const connect = async () => {
  try {
    // RECORDAR CRAR VUESTRA PROPIA DB Y PONERLO EN EL .ENV
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true, useUnifiedTopology: true
    })
    console.log('Connected to DB 🚀')
  } catch (error) {
    console.error('Not connected to DB ❌')
  }
}

module.exports = { connect }