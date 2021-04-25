const Mananger = require("../lib/Manager");

test("Can instantiate Employee instance", () => {
    const e = new Manager();
    expect(typeof(e)).toBe("object")
})