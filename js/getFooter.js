$.get("http://robertmarchese.github.io/partials/footer.html", function (data) { // Grabs footer

	$(document).ready(function () {

		//check if this document has .container
		$(".container").prepend(data);







	})

})