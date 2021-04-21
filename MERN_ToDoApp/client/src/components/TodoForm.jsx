import React from "react";

export default function TodoForm() {
	return (
		<form>
			<label htmlFor="todo"></label>
			<input type="text" name="todo" />
			<button type="submit">Submit</button>
		</form>
	);
}
