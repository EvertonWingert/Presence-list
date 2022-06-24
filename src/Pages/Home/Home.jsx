import React, { useState } from "react";
import "./styles/global.css";
import "./styles/style-mobile.css";
import "./styles/style-desktop.css";
import { CardPresence } from "../../Components/Card-presence";
import { CardAbsence } from "../../Components/Card-absence";

export function Home() {
	const [studentName, setStudentName] = useState();
	const [students, setStudents] = useState([]);
	const [presentTotal, setPresentTotal] = useState(0);
	const [absentTotal, setAbsentTotal] = useState(0);

	function handleAddPresentStudent() {
		const newStudent = {
			name: studentName,
			time: new Date().toLocaleDateString("pt-br", {
				hour: "2-digit",
				minute: "2-digit",
				second: "2-digit",
			}),
			present: true,
		};

		setStudents((prevState) => [newStudent, ...prevState]);
		setPresentTotal(presentTotal + 1);
	}

	function handleAddAbsentStudent() {
		const newStudent = {
			name: studentName,
			time: new Date().toLocaleDateString("pt-br", {
				hour: "2-digit",
				minute: "2-digit",
				second: "2-digit",
			}),
			present: false,
		};

		setStudents((prevState) => [newStudent, ...prevState]);
		setAbsentTotal(absentTotal + 1);
	}

	return (
		<div className="Home">
			<h1>Lista de presença</h1>

			<input type="text" placeholder="Nome do aluno" onChange={(e) => setStudentName(e.target.value)}></input>
			<div className="buttons">
				<button type="button" id="button-presence" onClick={handleAddPresentStudent}>
					Presente
				</button>

				<button type="button" id="button-absence" onClick={handleAddAbsentStudent}>
					Ausente
				</button>
			</div>

			<div className="total">
				<h3>Presentes: {presentTotal}</h3>
				<h3>Ausentes: {absentTotal}</h3>
			</div>

			{students.map((student) => (
				<CardPresence
					key={student.time}
					user={student.name}
					dateTime={student.time}
					present={student.present}
				/>
			))}
		</div>
	);
}
