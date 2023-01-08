const fs = require("fs");
const process = require("process");

function verifyExistance(path = String) {
	// Attempts to open the file with the given name for reading to verify that the file exists
	return new Promise((resolve) => {
		fs.open(path, "r", function (err, file) {
			if (err) {
				console.log(`A file with the path ${path} does not exist. The program will now terminate.`);
				process.exitCode = 2;
			}
			resolve();
		});
	});
}

module.exports = verifyExistance;
