// Lirearias
const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const { connect } = require('./db/connect')
// Routes
const ActorRoutes = require('./api/routes/actor.routes')
const MovieRoutes = require('./api/routes/movie.routes')
const TagRoutes = require('./api/routes/tag.routes')
const TeaserRoutes = require('./api/routes/teaser.routes')
const UserRoutes = require('./api/routes/user.routes')

// Inicializar la escucha de Varaibales de entorno
dotenv.config()
// Uso de port
const PORT = process.env.PORT || 8000

// Inicializar Express
const app = express()

// Conectarme a mi DB
connect()

// CORS para trabajar con puerto default Vite
// {
//   origin: ['domains'],
//   credentials: true
// }
app.use(cors())

// En cada GET petición lo máximo de peso info es 2mb
app.use(express.json({ limit: '2mb' }))
// Envío
app.use(express.urlencoded({ limit: '2mb', extended: true }))

// Uso de routes - express en nuestro server
app.use('/api-v1/actors', ActorRoutes)
app.use('/api-v1/movies', MovieRoutes)
app.use('/api-v1/tags', TagRoutes)
app.use('/api-v1/teasers', TeaserRoutes)
app.use('/api-v1/users', UserRoutes)

// Manejar errores para routes no encontradas o definidas
app.use('*', (req, res, next) => {
  const error = new Error('Route not found')
  error.status = 404
  return next(error)
})

// Manejador de errores -> controllers - lanzan los errores en el next
app.use((error, req, res) => {
  return res
    .status(error.status || 500)
    .json(error.message || 'Unexpected error')
})

// Eliminar la opción de visualizar con qué se ha desarrollado la API
app.disable('x-powered-by')

// Abrimos nuestro server
app.listen(PORT, () => {
  console.log(`Server listening on PORT 🧪: ${PORT}`)
})
