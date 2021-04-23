const Todo = require("../models/todoModel");

// Here we create the function to create new todo items in our database.
const createTodo = async (req, res) => {
	try {
		const { todo } = req.body;

		const newTodo = await Todo.create({ todo }); // <- todo: todo, it's just a shorthand since it shares the same name

		// We send a response back when we call this endpoint, with a message and the information,
		// in this case, the todo item that we just created.
		res.status(201).json({ message: "Todo added successully", info: newTodo });
	} catch (err) {
		// If something goes wrong, here we send a response back with the error
		res.status(500).json({ message: "Something went wrong", error: err });
	}
};

// Next, we create a function to handle the deleting of todo items. Here we used the parameter of ":id"
// that we defined in our routes.
const deleteTodo = async (req, res) => {
	try {
		const { id } = req.params; // <- const id = req.params.id

		// The id we've got the the parameter will be used to search for a document that has that
		// specific id, and then delete it.
		const delTodo = await Todo.findByIdAndDelete(id);

		res.status(200).json({ message: "Todo found and deleted", info: delTodo });
	} catch (err) {
		res.status(500).json({ message: "something went wrong", error: err });
	}
};

// Lastly, we create a function for us to be able to fetch/get all the todo entries we've created,
// so we can display them in our front end. No id required, we just look for everything that is in our
// database.
const getTodos = async (req, res) => {
	try {
		// Since we do not pass a specific criteria, it will show all of the documents we created in our databse.
		const todos = await Todo.find({});

		res.status(200).json({ message: "Todos found and feteched", info: todos });
	} catch (err) {
		res.status(500).json({ message: "Something went wrong", error: err });
	}
};

module.exports = { createTodo, deleteTodo, getTodos };
