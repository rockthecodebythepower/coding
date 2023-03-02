const express = require('express')
const ProductRoutes = express.Router()
const { retrieveAllProducts } = require('./product.controller')

ProductRoutes.get('/', retrieveAllProducts)

module.exports = ProductRoutes