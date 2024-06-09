import "./MainContainer.css";
import AddTask from "./AddTask.tsx";
import TaskTable from "./TaskTable.tsx";
import { useState } from "react";

export interface Task {
	name: string;
	isCheck: boolean;
}

export default function MainContainers() {
	const [taskName, setTaskName] = useState("");

	const [tasks, setTasks] = useState<Task[]>([
		{ name: "Go out shopping", isCheck: false },
		{ name: "Study React", isCheck: false },
	]);

	function handleDeleteTask(name: string) {
		const filteredTasks = tasks.filter((currentTask) => {
			return !(currentTask.name === name);
		});

		setTasks(filteredTasks);
	}

	function addNewTask(name: string) {
		const newTasks = [
			...tasks,
			{
				name: name,
				isCheck: false,
			},
		];
		setTasks(newTasks);
		setTaskName("");
	}

	return (
		<div className="main-container">
			<AddTask
				createTask={addNewTask}
				setTaskName={setTaskName}
				taskName={taskName}
			/>
			{tasks.length !== 0 && (
				<TaskTable tasks={tasks} handleDeleteTask={handleDeleteTask} />
			)}
		</div>
	);
}
