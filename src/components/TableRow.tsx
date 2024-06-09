import { Trash2 } from "lucide-react";
import { Square } from "lucide-react";
import { SquareCheck } from "lucide-react";
import { Task } from "./MainContainer";
import "./TableRow.css";

interface TableRowProps {
	task: Task;
	handleDeleteTask: (taskName: string) => void;
}

export default function TableRow({ task, handleDeleteTask }: TableRowProps) {
	return (
		<div className="table-row">
			<div className="square-task">
				<button className="square">
					<Square size={16} />
				</button>
				<div className="task">{task.name}</div>
			</div>
			<button
				className="delete-btn"
				onClick={() => {
					handleDeleteTask(task.name);
				}}>
				<Trash2 />
			</button>
		</div>
	);
}
