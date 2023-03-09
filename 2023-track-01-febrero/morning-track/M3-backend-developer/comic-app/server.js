const mongoose = require("mongoose");
const app = require("./src/app");
const PORT = process.env.PORT || 8000;

require("dotenv").config();

/* Connecting to the database and then starting the server. */
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(PORT, console.log("Server started on port 8000"));
  })
  .catch((err) => {
    console.log(err);
  });