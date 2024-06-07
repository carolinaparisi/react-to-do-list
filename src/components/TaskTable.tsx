import "./TaskTable.css";
import TableTab from "./TableTab";
import TableRow from "./TableRow";

interface TaskTableProps {
	tasks: string[];
}

export default function TaskTable({ tasks }: TaskTableProps) {
	return (
		<div className="task-table">
			<div className="table-tab">
				<TableTab name="all tasks" />
				<TableTab name="complete" />
				<TableTab name="incomplete" />
			</div>
			{tasks.map((task, index) => {
				return <TableRow key={index} task={task} />;
			})}
		</div>
	);
}
