export function FormPresence({ onSubmitForm }) {
	function handleSubmit(event) {
		event.preventDefault();

		const form = new FormData(event.target);
		const name = form.get("nome-aluno");
		const present = form.get("present");

		onSubmitForm(name, present);

		event.target.reset();
	}

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label>Nome</label>
				<input type="text" placeholder="Nome do aluno" name="nome-aluno" required />
			</div>
			<div>
				<label>Esta na aula?</label>
				<input type="checkbox" name="present" />
			</div>
			<button type="submit">Salvar</button>
		</form>
	);
}
