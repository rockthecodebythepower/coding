const express = require('express')

const CarRoutes = require('./routes/car.routes')

const app = express()

app.get('/', (req, res) => {
  res.status(200).json({ alive: 'True' })
})

app.use('/api', CarRoutes)

module.exports = app