// require the library
const mongoose = require("mongoose");

// connect to the database
mongoose.connect("mongodb://localhost/todo", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// acquire the connection (to check if it is successful)
const db = mongoose.connection;

// if error, console the error message
db.on("error", console.error.bind(console, "connection error:"));

// up and running then print the success message
db.once("open", function () {
  // we're connected!
  console.log("database connected successfully");
});
