const express = require("express");

const {
  getComics,
  getComic,
  createComic,
  updateComic,
  deleteComic,
} = require("../controllers/comic.controller");

const router = express.Router();

/* Creating the routes for the comic controller. */
router.get("/comics", getComics);

router.get("/comics/:id", getComic);

router.post("/comics", createComic);

router.patch("/comics/:id", updateComic);

router.delete("/comics/:id", deleteComic);

module.exports = router;