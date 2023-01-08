const fs = require("fs");
const process = require("process");

function processFile(path = String) {
	// Opens the file, formats each line as necessary, then outputs the line to stdout
	return new Promise((resolve) => {
		const stream = fs.createReadStream(path);
		stream.setEncoding("UTF8");

		stream.on("data", function (data) {
			data = data.toString().split(/\r?\n/);
			for (let i = 1; i < data.length; i++) {
				console.log(data[i]);
			}
		});

		stream.on("end", function () {
			resolve();
		});
		stream.on("error", function () {
			process.exitCode = 1;
		});
	});
}

module.exports = processFile;
