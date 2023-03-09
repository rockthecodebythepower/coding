const Comic = require("../models/comic.model");

/**
 * It's an asynchronous function that uses the await keyword to wait for the result of the find()
 * method on the Comic model.
 *
 * The find() method returns a promise, which is why we can use the await keyword.
 * @param req - The request object. This object represents the HTTP request and has properties for the
 * request query string, parameters, body, HTTP headers, and so on.
 * @param res - The response object.
 */
const getComics = async (req, res) => {
  try {
    const comics = await Comic.find();
    res.status(200).json(comics);
  } catch (error) {
    res.status(500).json(error);
  }
};

/**
 * It's an asynchronous function that uses the Comic model to find a comic by its id, and then
 * sends a response with the comic's data.
 * @param req - The request object.
 * @param res - The response object.
 */
async function getComic(req, res) {
  try {
    const { id } = req.params;
    const comic = await Comic.findById(id);
    res.status(200).json(comic)
  } catch (error) {
    res.status(500).json(error);
  }
}

/**
 * It creates a new comic using the data from the request body and returns the created comic in the
 * response.
 * @param req - The request object. This object represents the HTTP request and has properties for the
 * request query string, parameters, body, HTTP headers, and so on.
 * @param res - The response object.
 */
const createComic = async (req, res) => {
  const newComic = new Comic(req.body)
  try {
    const comic = await Comic.create(newComic);
    res.status(201).json(comic);
  } catch (error) {
    res.status(500).json(error);
  }
};

/**
 * It takes the id of the comic to be updated from the request params, and the updated comic data
 * from the request body, and then updates the comic in the database with the new data, and returns
 * the updated comic to the client.
 * @param req - The request object.
 * @param res - The response object.
 */
const updateComic = async (req, res) => {
  try {
    const comic = await Comic.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(comic);
  } catch (error) {
    res.status(500).json(error);
  }
};

/**
 * It finds a comic by its id and deletes it.
 * @param req - The request object. This object represents the HTTP request and has properties for the
 * request query string, parameters, body, HTTP headers, and so on.
 * @param res - The response object.
 */
const deleteComic = async (req, res) => {
  try {
    const comic = await Comic.findByIdAndDelete(req.params.id);
    res.status(200).json(comic);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  getComics,
  getComic,
  createComic,
  updateComic,
  deleteComic,
};