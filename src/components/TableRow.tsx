import { Trash2 } from "lucide-react";
import { Square } from "lucide-react";
import { SquareCheck } from "lucide-react";
import { Task } from "./MainContainer";
import "./TableRow.css";

interface TableRowProps {
	task: Task;
	handleDeleteTask: (taskName: string) => void;
	handleCheckTask: (id: number) => void;
}

export default function TableRow({
	task,
	handleDeleteTask,
	handleCheckTask,
}: TableRowProps) {
	return (
		<div className="table-row">
			<div className="square-task">
				<button
					className="square"
					onClick={() => {
						console.log(task.isCheck);
						return handleCheckTask(task.id);
					}}>
					{task.isCheck ? <SquareCheck size={16} /> : <Square size={16} />}
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
