const getFileName = require("../src/getfilename.js");

describe("Filename Extractor", () => {
	test("Filenames should be correctly extracted from absolute paths", () => {
		const result = getFileName("/etc/success.js");
		expect(result).toBe("success.js");
	});
	test("Filenames should be correctly extracted from relative paths", () => {
		const result = getFileName("src/success.js");
		expect(result).toBe("success.js");
	});
	test("Filenames should be correctly extracted from relative paths that start with ./", () => {
		const result = getFileName("./success.js");
		expect(result).toBe("success.js");
	});
	test("Filenames should be correctly extracted for hidden files", () => {
		const result = getFileName(".success.js");
		expect(result).toBe(".success.js");
	});
});
