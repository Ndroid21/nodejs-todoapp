// require the todo model
const Todo = require("../models/todo");

exports.create = (req, res) => {
  const { description, category, dueDate } = req.body;
  Todo.create(
    {
      description,
      category,
      dueDate,
    },
    (err, newTodo) => {
      if (err) {
        console.log(err);
        return;
      }

      return res.redirect("back");
    }
  );
};

exports.read = (req, res) => {
  const { sortBy, categoryType } = req.query;

  Todo.find({}, (err, todos) => {
    if (err) {
      console.log(err);
      return;
    }

    return res.render("home", { todos });
  });
};

exports.delete = (req, res) => {
  const { id } = req.query;

  Todo.findByIdAndDelete(id, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    return res.redirect("back");
  });
};
