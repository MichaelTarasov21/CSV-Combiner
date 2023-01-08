const process = require("process");

const verifyExistance = require("../verifyFileExistance.js");

describe("File Existance Checker", () => {
	test("The file tests/verifyFileExistance.test.js should exist", () => {
		return verifyExistance("tests/verifyFileExistance.test.js").then(() => {
			expect(process.exitCode).toBeUndefined();
		});
	});
	test("The file thisfileshouldnotexist should not exist", () => {
		return verifyExistance("thisfileshouldnotexist").then(() => {
			expect(process.exitCode).toBe(2);
		});
	});
});
