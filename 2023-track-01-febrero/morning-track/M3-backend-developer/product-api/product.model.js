const mongoose = require('mongoose')

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String
    },
    price: {
      type: String
    },
    img: {
      type: String
    },
    description: {
      type: String
    },
    supplier: {
      type: String
    }
  }
)

const ProductModel = mongoose.model('product', productSchema)

module.exports = ProductModel