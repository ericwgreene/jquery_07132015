//$.holdReady(true);

$(document).ready(function() {

	console.log("dom loaded...");

});

$(function() {

	console.log("dom loaded...");

});

function myReady(fn) {

	function readyFn() {
		fn();
		document.removeEventListener("DOMContentLoaded", readyFn);
	}

	document.addEventListener("DOMContentLoaded", readyFn);

}

myReady(function() {
	console.log("do it!");
});

jQuery.ready.promise().then(function() {
	console.log("I promise to do it!");
})
