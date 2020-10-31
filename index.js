// require libraries
const express = require("express");
const path = require("path");

// setting port
const PORT = 4000;

// require configs
const db = require("./config/database");

// require routes
const todoRoutes = require("./routes/todoRoutes");

// setting up the app
const app = express();

// set up the view engine
app.set("view engine", "ejs");
// set up the views folder
app.set("views", path.join(__dirname, "views"));

// middlewares
app.use(express.urlencoded());
app.use(express.static("assets")); // stating the folder name for the static files like css, js

// using todoRoutes
app.use("/", todoRoutes);

// listen for the connection
app.listen(PORT, (err) => {
  // if any error console it
  if (err) {
    console.log(err);
    return;
  }
  // successful connection
  console.log(`Server connected on port ${PORT}`);
});
