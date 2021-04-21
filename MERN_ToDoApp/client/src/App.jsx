import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import "./app.css";

export default function App() {
	return (
		<>
			<h1>MERN Todo App</h1>
			<div className="container">
				<div className="todo-form">
					<TodoForm />
				</div>
				<div className="todo-list">
					<TodoList />
				</div>
			</div>
		</>
	);
}
