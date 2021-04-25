const Engineer = require("../lib/Engineer");

test("Can instantiate Employee instance", () => {
    const e = new Engineer();
    expect(typeof(e)).toBe("object")
})