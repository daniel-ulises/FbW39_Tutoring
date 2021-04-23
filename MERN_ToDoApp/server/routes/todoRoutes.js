const router = require("express").Router();
const { createTodo, deleteTodo, getTodos } = require("../controllers/todoControllers");

router.post("/", createTodo);
// Here we set a parameter ":id", which will take whatever comes after /todo/, and use that
// value to interact with our controller
router.delete("/:id", deleteTodo);
router.get("/", getTodos);

module.exports = router;
