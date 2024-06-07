import "./TableRow.css";

interface TableRowProps {
	task: string;
}

export default function TableRow({ task }: TableRowProps) {
	return <div className="table-row">{task}</div>;
}
