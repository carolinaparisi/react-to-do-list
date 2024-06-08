import "./TaskTable.css";
import TableTab from "./TableTab";
import TableRow from "./TableRow";

interface TaskTableProps {
	tasks: string[];
	handleDeleteTask: (task: string) => void;
}

export default function TaskTable({ tasks, handleDeleteTask }: TaskTableProps) {
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
					/>
				);
			})}
		</div>
	);
}
