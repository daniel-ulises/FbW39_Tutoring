const mongoose = require("mongoose");

// We define a Schema for your database, which will be used to manipulate data.
// We can pass in our document entries/keys, and set some options for them.
// Here we define our todo key to be a type of String, and it also is required, which means
// it should not be empty.
const todoSchema = new mongoose.Schema({
	todo: {
		type: String,
		required: true,
	},
});

// We export our Schema so we can use it in our controllers to create, get and delete todo entries.
const Todo = mongoose.model("Todo", todoSchema, "todomern");

module.exports = Todo;
