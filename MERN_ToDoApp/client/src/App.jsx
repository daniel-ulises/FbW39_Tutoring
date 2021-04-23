import { useEffect, useState } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import "./app.css";

export default function App() {
	const [todos, setTodos] = useState([]);

	// We create the fetching function that will get all our todo items from the database
	// so we can display them in our app.
	const fetchTodos = async () => {
		await (await fetch("http://localhost:3004/todo"))
			.json()
			.then(json => setTodos(json.info))
			.catch(err => console.log(err));
	};

	// We use useEffect so it fetches our items each time we load the page, and call our
	// function that we defined above.
	useEffect(() => {
		fetchTodos();
	}, []);

	return (
		<>
			<h1>MERN Todo App</h1>
			<div className="container">
				<div className="todo-form">
					<TodoForm todos={todos} setTodos={setTodos} />
				</div>
				<div className="todo-list">
					<TodoList todos={todos} setTodos={setTodos} />
				</div>
			</div>
		</>
	);
}
