import "./style.css";

export function CardPresence({ user, dateTime, present }) {
	return (
		<div className={present ? "Card-presence" : "Card-absence"}>
			<strong>{user}</strong>
			<strong>{dateTime}</strong>
		</div>
	);
}
