import React, { useState, useMemo } from "react";
import "./styles/global.css";
import "./styles/style-mobile.css";
import "./styles/style-desktop.css";
import { FormPresence } from "../../Components/Form-presence";
import { ListPresence } from "../../Components/List-presence";

function studentFactory(name, present) {
	return {
		name: name,
		time: new Date().toLocaleDateString("pt-br", {
			hour: "2-digit",
			minute: "2-digit",
			second: "2-digit",
		}),
		present: present,
	};
}

export function Home() {
	const [students, setStudents] = useState([]);

	function handleStudent(name, present) {
		const newStudent = studentFactory(name, present);
		setStudents((prevState) => [newStudent, ...prevState]);
	}

	const totalStudents = useMemo(() => students.length, [students]);
	const totalPresent = useMemo(() => students.filter((student) => student.present).length, [students]);
	const totalAbsent = useMemo(() => totalStudents - totalPresent, [totalStudents, totalPresent]);

	return (
		<div className="Home">
			<h1>Lista de presença</h1>

			<FormPresence onSubmitForm={handleStudent} />

			<div className="total">
				<h3>Presentes: {totalPresent}</h3>
				<h3>Ausentes: {totalAbsent}</h3>
			</div>

			<ListPresence students={students} />
		</div>
	);
}
