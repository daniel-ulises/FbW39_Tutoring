import { useState } from "react";

// We get the props passed from the App.jsx and destructur them.
export default function TodoForm({ todos, setTodos }) {
	const [input, setInput] = useState("");

	// We create the function that will send the information to the server as a JSON object.
	const handleSubmit = async e => {
		e.preventDefault();

		// Fetch sends GET requests per default, so we have to pass some options to make it a POST request.
		const req = await fetch("http://localhost:3004/todo", {
			method: "POST", // Here we define the POST request
			headers: {
				// The headers will let the backend know this is a JSON object
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ todo: input }), // Here he send the body to the content, which is what we want to send.
		});

		// Once the POST request finished, we get something we defined sent back from the backend,
		// and to be able to use it in our state we will have to convert it to JSON.
		const json = await req.json();

		// Once we have the JSON, we will use the spread operator to insert our previous todo items,
		// and adding the todo item we received back from the backend after the operation was done.
		setTodos([...todos, json.info]);

		// This will just reset our form, so what we previously typed in will be gone.
		e.target.reset();
	};

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="todo"></label>
			<input type="text" name="todo" onChange={e => setInput(e.target.value)} />
			<button type="submit">Submit</button>
		</form>
	);
}
