import "./MainContainer.css";
import AddTask from "./AddTask.tsx";
import TaskTable from "./TaskTable.tsx";
import { useState } from "react";

export interface Task {
	id: number;
	name: string;
	isCheck: boolean;
}

export default function MainContainer() {
	const [taskName, setTaskName] = useState("");

	const [tasks, setTasks] = useState<Task[]>([
		{ id: 1, name: "Go out shopping", isCheck: false },
		{ id: 2, name: "Study React", isCheck: false },
	]);

	function handleDeleteTask(name: string) {
		const filteredTasks = tasks.filter((currentTask) => {
			return !(currentTask.name === name);
		});

		setTasks(filteredTasks);
	}

	function handleCheckTask(id: number) {
		const updatedTasks = tasks.map((task) => {
			if (task.id === id) {
				return {
					id: task.id,
					name: task.name,
					isCheck: !task.isCheck,
				};
			}
			return task;
		});

		setTasks(updatedTasks);
	}

	function addNewTask(name: string) {
		let newId = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;

		const newTasks = [
			...tasks,
			{
				id: newId,
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
				<TaskTable
					tasks={tasks}
					handleDeleteTask={handleDeleteTask}
					handleCheckTask={handleCheckTask}
				/>
			)}
		</div>
	);
}
