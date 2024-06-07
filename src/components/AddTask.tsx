import "./AddTask.css";

interface AddTaskProps {
	createTask: (input: string) => void;
	setTaskName: (value: string) => void;
	taskName: string;
}

export default function AddTask({
	createTask,
	setTaskName,
	taskName,
}: AddTaskProps) {
	return (
		<div className="input-container">
			<input
				value={taskName}
				onChange={(event) => setTaskName(event.target.value)}
				type="text"
				className="add-input"
			/>
			<button onClick={() => createTask(taskName)} className="add-btn">
				Add
			</button>
		</div>
	);
}
