#!/bin/env node
const { exit } = require("process");

const getFilePaths = require("./getfilepaths.js");
const verifyExistance = require("./verifyFileExistance.js");

async function main() {
	// Gets all file paths supplied as arguments and removes the call to node as well as the name of the script being executed
	const filepaths = getFilePaths();
	for (let i = 0; i < filepaths.length; i++) {
		await verifyExistance(filepaths[i]);
		// If an invalid file has been provided terminate the program
		if (process.exitCode == 2) exit();
	}

	console.log(filepaths);
}

main();

module.exports = main;
