$(document).ready(function () {

	$.getJSON("jsonDatabase/jsonCases.json", function (data) {

		console.dir(data);
		var html = "";

		$.each(data, function (index, item) {
				html += '<div class="col-md-4 cases">' +
					'<div class="caseType">' + item.type + '</div>' +
					'<div class="caseName">' + item.name + '</div>' +
					'<div class="caseColour">' + item.colour + '</div>' +
					'<img src"' + item.image + '"/>;
					// do some stuff



				html += '</div>';
			}) //eachcat

		$("#caseData").append(html);

	})

})


/*

<div class="col-md-4 cases">
<div class="caseName"> </div>
<div class="caseType"> </div>
<div class="caseColour"> </div>
<img src=""/>
<div class="commentsContainer">  // one per comment
<div class="buyerName"> </div>
<div class="buyerLocation"> </div>
<div class="buyerStars"> </div>
</div>


</div>

*/