$(function() {


	var result = $("li:eq(1)", "div:eq(0)");

	console.log(result.length);

	result.each(function (index, element) {
		console.log(element.tagName);
		console.log(element.textContent);
	});


});
