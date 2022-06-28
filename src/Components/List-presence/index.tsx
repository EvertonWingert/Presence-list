import { CardPresence } from "../Card-presence";

export function ListPresence({ students }) {
	return students.map((student, index) => (
		<CardPresence key={index} user={student.name} dateTime={student.time} present={student.present} />
	));
}
