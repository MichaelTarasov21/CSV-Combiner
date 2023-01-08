const fs = require("fs");
const process = require("process");

const getFileName = require("./getfilename.js");

function processFile(path = String, fileNumber = Number) {
	// Opens the file, formats each line as necessary, then outputs the line to stdout
	const filename = getFileName(path);
	return new Promise((resolve) => {
		const stream = fs.createReadStream(path);
		stream.setEncoding("UTF8");

		stream.on("data", function (data) {
			data = data.toString().split(/\r?\n/);
			if (fileNumber == 0) {
				// If this is the first file being processed, take the column headers from this file
				console.log(`${data[0]},"filename"`);
			}
			for (let i = 1; i < data.length - 1; i++) {
				// Skips the first line (heading) and the last line of the array (empty)
				console.log(data[i] + `,"${filename}"`);
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
