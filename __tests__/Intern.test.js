const Intern = require("../lib/Intern");

test("Can instantiate Employee instance", () => {
    const e = new Intern();
    expect(typeof(e)).toBe("object")
})