const Car = require('../models/car.model')

const retrieveAllCars = async (req, res) => {
  try {
    const cars = await Car.find()
    res.status(200).json(cars)
  } catch (error) {
    res.status(500).json(error)
  }
}

const retrieveCarById = async (req, res) => {
  try {
    console.log('Run test')
  } catch (error) {
    res.status(500).json(error)
  }
}

const createCar = async (req, res) => {
  console.log('hola', req.body)
  const newCar = new Car(req.body)
  try {
    const car = await Car.create(newCar);
    res.status(201).json(car);
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateCarByID = async (req, res) => {
  try {
    console.log('Run test')
  } catch (error) {
    res.status(500).json(error)
  }
}

const deleteCarByID = async (req, res) => {
  try {
    console.log('Run test')
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = {
  retrieveAllCars,
  retrieveCarById,
  createCar,
  updateCarByID,
  deleteCarByID
}