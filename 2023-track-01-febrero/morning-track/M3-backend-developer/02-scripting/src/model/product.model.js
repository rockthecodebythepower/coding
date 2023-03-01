const mongoose = require('mongoose')

const productSchema = new mongoose.Schema(
  {
    title: String,
    price: String
  }
)

const ProductModel = mongoose.model('product', productSchema)

module.exports = ProductModel