$(document).ready(function () {

		$("#getClients").on("click", function () {

				var url = "http://robertmarchese.github.io/otherProjects/ajaxExamples/jsonDatabase/clients.json";

				$.getJSON(url, function (data) {

						$.each(data, function (index, item) {
								$("#data").append(item.name);
							})
							//alert(data);
							//console.dir(data);

					}) //getJSON

			}) //click

	}) //ready