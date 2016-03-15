$.get("http//:google.com", function (data) {

	$(document).ready(function () {

		//check if this document has .container
		$(".container").prepend(data);


	})

})