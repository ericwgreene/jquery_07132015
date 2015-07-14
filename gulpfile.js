var gulp = require("gulp");

gulp.task("default", function() {

	var
		http = require("http"),
		express = require("express"),
		app = express();

	app.use(express.static("app/www"));

	http.createServer(app).listen(8080, function() {
		console.log("web server started on port 8080");
	});

});
