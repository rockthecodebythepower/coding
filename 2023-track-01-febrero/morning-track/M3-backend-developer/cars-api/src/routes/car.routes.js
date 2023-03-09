const express = require('express')

const {
  retrieveAllCars,
  retrieveCarById,
  createCar,
  updateCarByID,
  deleteCarByID
} = require('../controllers/car.controller')

const router = express.Router()

router.get('/cars', retrieveAllCars)
router.get('/cars/:id', retrieveCarById)
router.post('/cars', createCar)
router.patch('/cars/:id', updateCarByID)
router.delete('/cars/:id', deleteCarByID)

module.exports = router