function testRegExp() {
	let result_panel = document.getElementById("result_panel");
	let expr_reg = new RegExp(document.getElementById("expreg_field").value);
	try {
		if (expr_reg.test(document.getElementById("string_value").value)) {
			result_panel.className = "ok";
			result_panel.innerHTML = "Il y a correspondance";
		} else {
			result_panel.className = "ko";
			result_panel.innerHTML = "Pas de correspondance";
		}
	} catch (error) {
		result_panel.className = "ko";
		result_panel.innerHTML = "ERREUR DE SYNTAXE DANS L'EXPRESSION REGULIERE";
		console.error(error);
	}
}
