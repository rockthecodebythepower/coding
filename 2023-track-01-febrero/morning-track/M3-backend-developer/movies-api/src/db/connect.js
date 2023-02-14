const mongoose = require('mongoose')

let connectionState

const connect = async () => {
  mongoose.set('strictQuery', true)
  if (connectionState) return connectionState
  try {
    connectionState = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    connectionState.connection.on('error', (error) => {
      console.error(`DB connection error: ${error.message}`)
    })
    connectionState.connection.on('disconnected', () => {
      console.error(`DB disconnected, reconnecting...`)
    })
    console.log(`Connect to DB: ${connectionState.connection.name}`)
  } catch (error) {
    console.error(`Not connect to DB: ${error.message}`)
  }
  return connectionState
}

module.exports = { connect }
