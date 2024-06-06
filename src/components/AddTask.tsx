import "./AddTask.css";

export default function AddTask() {
	return (
		<div className="input-container">
			<input type="text" className="add-input" />
			<button className="add-btn">Add</button>
		</div>
	);
}
