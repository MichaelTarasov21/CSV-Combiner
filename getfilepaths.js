function getFilePaths() {
	// Returns an array of paths+names supplied as arguments
	const filePaths = process.argv;
	// Removes the call to node as well as the name of the script being executed from the array
	filePaths.shift();
	filePaths.shift();

	return filePaths;
}

module.exports = getFilePaths;
