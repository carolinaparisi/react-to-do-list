import "./MainContainer.css";
import AddTask from "./AddTask.tsx";
import TaskTable from "./TaskTable.tsx";

export default function MainContainers() {
	return (
		<div className="main-container">
			<AddTask />
			<TaskTable />
		</div>
	);
}
