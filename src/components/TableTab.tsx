import "./TableTab.css";

interface TableTabProps {
	name: string;
}

export default function TableTab({ name }: TableTabProps) {
	return <button className="filter-tab">{name}</button>;
}
