import "./TaskTable.css";
import TableTab from "./TableTab";
import TableRow from "./TableRow";
import { Task } from "./MainContainer";

interface TaskTableProps {
	tasks: Task[];
	handleDeleteTask: (task: string) => void;
	handleCheckTask: (id: number) => void;
}

export default function TaskTable({
	tasks,
	handleDeleteTask,
	handleCheckTask,
}: TaskTableProps) {
	return (
		<div className="task-table">
			<div className="table-tab">
				<TableTab name="all tasks" />
				<TableTab name="complete" />
				<TableTab name="incomplete" />
			</div>
			{tasks.map((task, index) => {
				return (
					<TableRow
						key={index}
						task={task}
						handleDeleteTask={handleDeleteTask}
						handleCheckTask={handleCheckTask}
					/>
				);
			})}
		</div>
	);
}
