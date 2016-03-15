$.get("http://robertmarchese.github.io/partials/nav.html", function (data) {

	$(document).ready(function () {

		//check if this document has .container
		$(".container").prepend(data);
		$(".container").fadeIn();







	})

})