export default function TodoList({ todos, setTodos }) {
	// We create the function to delete an item from our database and our list.
	// Again, we have to tell fetch that this will be a DELETE request in order for this to work.
	const handleDelete = async id => {
		await fetch(`http://localhost:3004/todo/${id}`, {
			method: "DELETE", // Defining our request to be a DELETE request.
		});

		// Once we deleted our item from the database, we have to make sure it also gets removed from
		// our app, and we do this with a the filter method.
		const filtered = todos.filter(item => item._id !== id);

		// Lastly we pass in the filtered array into our state, so the app rerenders and we do not
		// see the deleted item anymore.
		setTodos(filtered);
	};

	const todoItems = todos.map(item => {
		return (
			<li key={item._id}>
				<span>{item.todo}</span>
				<span className="todo-delete" onClick={() => handleDelete(item._id)}>
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

	return <ul>{todos[0] ? todoItems : <h3>Nothing to show here</h3>}</ul>;
}
