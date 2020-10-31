const express = require("express");

const router = express.Router();

const TodoController = require("../controllers/todos_controller");

router.get("/", TodoController.read);
router.post("/", TodoController.create);
router.get("/delete", TodoController.delete);

module.exports = router;
