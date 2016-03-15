$.get("http//:robertmarchese.github.io/Partial/nav.html", function (data) {

	$(document).ready(function () {

		//check if this document has .container
		$(".container").prepend(data);


	})

})