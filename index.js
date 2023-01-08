#!/bin/env node

const getFilePaths = require("./getfilepaths.js");
const verifyExistance = require("./verifyFileExistance.js");
const processFile = require("./processFile.js");

async function main() {
	// Gets all file paths supplied as arguments and removes the call to node as well as the name of the script being executed
	const filepaths = getFilePaths();

	for (let i = 0; i < filepaths.length; i++) {
		await verifyExistance(filepaths[i]);
		// If an invalid file has been provided terminate the program
		if (process.exitCode == 2) process.exit();
	}

	console.log(`"email_hash","category","filename"`);
	for (let i = 0; i < filepaths.length; i++) {
		processFile(filepaths[i]);
	}
}

main();

module.exports = main;
