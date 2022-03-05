const Intern = require("../lib/Intern");

test("Can set university via constructor", () => {
    const testValue = "UOB";
    const e = new Intern("bob", 1, "test@test.com", testValue);
    expect(e.university).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
    const testValue = "Intern";
    const e = new Intern("bob", 1, "test@test.com", "UOB");
    expect(e.getRole()).toBe(testValue);
});

test("Can get university via getUniversity()", () => {
        const testValue = "UOB";
    const e = new Intern("bob", 1, "test@test.com", testValue);
    expect(e.university()).toBe(testValue);
});