import "./TableTab.css";

interface TableTabProps {
	name: string;
	setFilter: (name: string) => void;
}

export default function TableTab({ name, setFilter }: TableTabProps) {
	return (
		<button className="filter-tab" onClick={() => setFilter(name)}>
			{name}
		</button>
	);
}
