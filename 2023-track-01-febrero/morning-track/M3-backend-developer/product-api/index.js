const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const { connect } = require('./db/connect')

const ProductRoutes = require('./product.routes')

dotenv.config()
const PORT = process.env.PORT || 8000
const app = express()
connect()
app.use(cors())
app.use('/api/products', ProductRoutes)


app.use('*', (req, res, next) => {
  const error = new Error('Route not found')
  error.status = 404
  return next(error)
})

app.use((error, req, res) => {
  return res
    .status(error.status || 500)
    .json(error.message || 'Unexpected error')
})

app.listen(PORT, () => {
  console.log(`Server listening on PORT 🧪: ${PORT}`)
})
