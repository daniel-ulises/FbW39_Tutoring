---
# MERN Todo App
---

In this session we've created a full stack App Todo application, using `mongodb`with `mongoose` for the database, `NodeJS` and `express` for the server and `React` for the front end.

This is a really simple implementation where we can create and delete items, to start getting the feeling of how the backend works and connecting it to the front end.

In this project we follow the **MVC** architecture, where we define a Schema/model with `mongoose` for our todo app. We also learned what the controllers are and how to create them, and finally what routes are and how to create them.

---

## Backend

---

### Models

We created a really basic Schema for our app to interact with the database. While this only has one key/value, this can show us how a Schema is built.

```javascript
# todoModel.js

const todoSchema = new mongoose.Schema({
	todo: {
		type: String,
		required: true,
	},
});
```

We can see here how we can apply different options to each key of our Schema object, one being the `type` of the value, and next if it should be required or not.

### Controllers

In this part we learned what controllers are, why we use them and how they are created. We defined three functions for our controllers; create a todo item, delete an item and get all the items in our database for us to display in our app.

```javascript
# todoControllers.js

const createTodo = async (req, res) => {
	try {
		const { todo } = req.body;

		const newTodo = await Todo.create({ todo });

		res.status(201).json({ message: "Todo added successully", info: newTodo });
	} catch (err) {
		res.status(500).json({ message: "Something went wrong", error: err });
	}
};
```

We saw what `async` functions are, why we would use them and how to implement them. Another topic we learned about was the `req.body` and what we can do with it.

### Routes

In this section we saw how easy it is to define our routes for our application. We also got to see what parameters are and how to use them.

```javascript
# todoRouters.js

router.delete("/:id", deleteTodo);
```

This was an easy way for us to delete single todo items in our front end.

---

## Frontend

---

In our React App we defined three components; `App.jsx`, `TodoList.jsx` and `TodoForm.jsx`. In `App.jsx` we made use of the `useEffect` to fetch the todo items from our database when the page loads.

```javascript
# App.jsx

const fetchTodos = async () => {
	await (await fetch("http://localhost:3004/todo"))
		.json()
		.then(json => setTodos(json.info))
		.catch(err => console.log(err));
};
```

We then used this data to display them in our `TodoList` component after mapping the state containing all the data.

```javascript
# TodoList.jsx

const todoItems = todos.map(item => {
	return (
		<li key={item._id}>
			<span className="todo-item">{item.todo}</span>
			<span className="todo-dele">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-5 w-5"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fillRule="evenodd"
						d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
						clipRule="evenodd"
					/>
				</svg>
			</span>
		</li>
	);
});

// We added a delete button as an SVG
```

To remove the item from our database we send a `DELETE` request to our backend, and in the front end we used a `filter()` to remove the recently deleted item from our list.

```javascript
# TodoList.jsx

const handleDelete = async id => {
	await fetch(`http://localhost:3004/todo/${id}`, {
		method: "DELETE",
	});

	const filtered = todos.filter(item => item._id !== id)

};)
```
