import { Trash2 } from "lucide-react";
import "./TableRow.css";

interface TableRowProps {
	task: string;
	handleDeleteTask: (task: string) => void;
}

export default function TableRow({ task, handleDeleteTask }: TableRowProps) {
	return (
		<div className="table-row">
			<div>{task}</div>
			<button
				className="delete-btn"
				onClick={() => {
					handleDeleteTask(task);
				}}>
				<Trash2 />
			</button>
		</div>
	);
}
