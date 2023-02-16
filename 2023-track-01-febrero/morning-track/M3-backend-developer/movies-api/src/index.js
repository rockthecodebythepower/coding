const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const { connect } = require('./db/connect')

const ActorRoutes = require('./api/routes/actor.routes')
const MovieRoutes = require('./api/routes/movie.routes')
const TagRoutes = require('./api/routes/tag.routes')
const TeaserRoutes = require('./api/routes/teaser.routes')

dotenv.config()

const app = express()

app.use(cors())
app.use('/public', express.static('public'))

app.use('/api-v1/actors', ActorRoutes)
app.use('/api-v1/movies', MovieRoutes)
app.use('/api-v1/tags', TagRoutes)
app.use('/api-v1/teaser', TeaserRoutes)

const PORT = process.env.PORT || 8000

connect()
  .then(() => {
    console.log('Successfully connected to DB')
    app.get('/', (req, res) => res.send('Welcome to API'))

    app.listen(PORT, () => console.log(`Server listen on PORT 🚀 ${PORT}`))
  })
  .catch((error) => {
    console.error('Error connecting to DB:', error.message)
    throw error
  })

app.use((error, req, res) => {
  console.error(error.message)
  res.status(500).send('Something went wrong')
})
