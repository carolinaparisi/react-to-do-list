import "./TaskTable.css";
import TableTab from "./TableTab";
import TableRow from "./TableRow";
import { Task } from "./MainContainer";
import { useState } from "react";

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
	//In order to encapsulate the logic of filtering tasks and not changing the all tasks themselves,
	//I need to manage the filter("complete", "incomplete", "all") states at this component, because it is
	//the one which renders the tasks by the filter buttons.
	const [filter, setFilter] = useState("all");

	return (
		<div className="task-table">
			<div className="table-tab">
				<TableTab name="all" setFilter={setFilter} />
				<TableTab name="complete" setFilter={setFilter} />
				<TableTab name="incomplete" setFilter={setFilter} />
			</div>
			{tasks
				.filter((task) => {
					if (filter === "complete") {
						return task.isCheck;
					}

					if (filter === "incomplete") {
						return !task.isCheck;
					}
					//a filter needs to return a boolean
					return true;
				})
				.map((task, index) => {
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
