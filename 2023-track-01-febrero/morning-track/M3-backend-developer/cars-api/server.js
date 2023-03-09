const mongoose = require('mongoose')
const app = require('./src/app')

require('dotenv').config()

const PORT = process.env.PORT || 8000

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, console.log('Server started 🚀'))
  })
  .catch((err) => {
    console.log(err)
  })