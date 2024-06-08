import "./MainContainer.css";
import AddTask from "./AddTask.tsx";
import TaskTable from "./TaskTable.tsx";
import { useState } from "react";

export default function MainContainers() {
	const [taskName, setTaskName] = useState("");

	const [tasks, setTasks] = useState(["Go out shopping", "Study React"]);

	function handleDeleteTask(task: string) {
		const filteredTasks = tasks.filter((currentTask) => {
			return !(currentTask === task);
		});

		setTasks(filteredTasks);
	}

	function addNewTask(taskName: string) {
		const newTasks = [...tasks, taskName];
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
			<TaskTable tasks={tasks} handleDeleteTask={handleDeleteTask} />
		</div>
	);
}
