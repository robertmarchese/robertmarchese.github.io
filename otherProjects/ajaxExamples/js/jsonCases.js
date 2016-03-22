$(document).ready(function () {

	$.getJSON("jsonDatabase/jsonCases.json", function (data) {

		console.dir(data);
		var html = "";

		$.each(data, function (index, item) {
				html += '<div class="col-md-4">' +
					'<div class="caseType">' + item.type + '</div>' +
					'<div class="caseName">' + item.name + '</div>' +
					'<div class="caseColour">' + item.colour + '</div>' +
					'<img src="' + item.image + '"/>' +
					'<div class= "commentsContainer">';

				$.each(item.comments, function (ind, i) {

						html += '<div class="buyerName">' + i.username + '</div>' +
							'<div class="buyerComment">' + i.comment + '</div>' +
							'<div class="buyerStars">';
						for (var i = 1; i <= 5; i++) {
							if (i <= i.stars) {
								html += 'img src="http://robertmarchese.github.io/otherProjects/ajaxExamples/images/star.png">';
							} else {
								html += '<img src="http://robertmarchese.github.io/otherProjects/ajaxExamples/images/nostar.png">';
							}
						}

						html += '</div>' + // stars div


					}) // each commment

				html +=

					'</div>' + //commentcontainer
					'</div>'; // col md div
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
<div class="buyerComment"> </div>
<div class="buyerStars"> </div>
</div>


</div>

*/