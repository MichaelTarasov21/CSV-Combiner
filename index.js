#!/bin/env node

const getFilePaths = require("./getfilepaths.js");

function main() {
	// Gets all file paths supplied as arguments and removes the call to node as well as the name of the script being executed
	const filepaths = getFilePaths();

	console.log(filepaths);
}

main();

module.exports = main;
