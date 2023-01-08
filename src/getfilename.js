function getFileName(path = String) {
	const result = path.split("\\").pop().split("/").pop();
	return result;
}

module.exports = getFileName;
