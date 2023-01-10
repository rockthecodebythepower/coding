const dotenv = require('dotenv')

dotenv.config()

const mongoose = require('mongoose')

const mongoURI = process.env.MONGO_DB

const connect = async () => {
  try {
    const db = await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    const { name, host } = db.connection
    console.log(`Connected to ${name} on ${host}`)
  } catch (error) {
    console.error(`No se ha podido conectar a la DB ${error}`)
  }
}

module.exports = { connect }