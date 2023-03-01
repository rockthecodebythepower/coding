const ProductModel = require('../model/product.model')

async function retrieveAllProducts(req, res, next) {
  try {
    const products = await ProductModel.find()
    res.status(200).json(products)
  } catch (error) {
    return next(error)
  }
}

module.exports = { retrieveAllProducts }