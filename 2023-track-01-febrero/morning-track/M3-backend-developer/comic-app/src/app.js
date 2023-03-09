const express = require("express");

const ComicRoutes = require("./routes/comic.routes");

const app = express();

/* A middleware that parses the body of the request and makes it available in the req.body object. */
app.use(express.json());

/* This is the root route. It is used to check if the server is running. */
app.get("/", (req, res) => {
  res.status(200).json({ alive: "True" });
});

/* Telling the server to use the routes in the ComicRoutes file. */
app.use("/api", ComicRoutes);

module.exports = app;