// require the library
const mongoose = require("mongoose");

// creating schema
const todoSchema = new mongoose.Schema({
  // setting up fields
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
  },
  dueDate: {
    type: Date,
  },
});

// generating model from schema
const Todo = mongoose.model("Todo", todoSchema);
// exporting model
module.exports = Todo;
