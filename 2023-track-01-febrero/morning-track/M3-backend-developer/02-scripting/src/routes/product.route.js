const express = require('express')

const ProductRoutes = express.Router()

const { retrieveAllProducts } = require('../controller/product.controller')

ProductRoutes.get('/all', retrieveAllProducts)

module.exports = ProductRoutes