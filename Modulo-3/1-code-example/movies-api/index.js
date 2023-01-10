const express = require('express')
const cors = require('cors')

const { connect } = require('./src/utils/database/db')

const { configCloudinary } = require('./src/utils/cloudinary/config')

const documentation = require('./src/utils/documentation/api.json')

const MovieRoutes = require('./src/api/movies/movies.routes')
const ActorRoutes = require('./src/api/actors/actor.routes')
const UserRoutes = require('./src/api/users/users.routes')

const PORT = process.env.PORT || 8000

const app = express()

connect()

configCloudinary()

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE')
  res.header('Access-Control-Allow-Credentials', true)
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  next()
})

app.use(cors({
  origin: '*',
  credentials: true
}))

app.use(express.json({ limit: '5mb' }))

app.use(express.urlencoded({
  limit: '5mb',
  extended: true
}))

app.use('/api/movies', MovieRoutes)
app.use('/api/actors', ActorRoutes)
app.use('/api/users', UserRoutes)


app.use('/api', (req, res, next) => res.json(documentation))

app.use('*', (req, res, next) => {
  const error = new Error()
  error.status = 404
  error.message = 'Route not found'
  return next(error)
})

app.use((err, req, res, next) => {
  return res.status(err.status || 500).json(err.message || 'Unexpected Error')
})

app.disable('x-powered-by')

const server = app.listen(PORT, () => console.log(`Server Listen on port: ${PORT}`))