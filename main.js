function testRegExp() {
	let result_panel = document.getElementById("result_panel");
	try {
		let expr_reg = new RegExp(document.getElementById("expreg_field").value);
		if (expr_reg.test(document.getElementById("string_value").value)) {
			result_panel.className = "ok";
			result_panel.innerHTML = "Il y a correspondance";
		} else {
			result_panel.className = "ko";
			result_panel.innerHTML = "Pas de correspondance";
		}
	} catch (error) {
		result_panel.className = "error";
		result_panel.innerHTML = error;
		console.log(typeof error)
		for (let property_name in error) {
			console.log(`${property_name}: ${error[property_name]}`);
		}
		console.error(error);
	}
}