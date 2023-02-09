const express = require('express');
const { connect } = require('./database/connect')

const ProductRoutes = require('./routes/product.route')

const app = express()
const PORT = process.env.PORT || 3001

connect().then(() => {
  app.use('/api/products', ProductRoutes)

  app.listen(PORT, () => {
    console.log(`Server Running in port ${PORT}!`);
  })
}).catch((error) => {
  throw error
})


