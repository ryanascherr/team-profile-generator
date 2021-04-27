const Manager = require("../lib/Manager");

test("Can instantiate Manager instance", () => {
    const ryan = new Manager("Ryan", 1, "ryanascherr@gmail.com", "410-292-1432");
    expect(typeof(ryan)).toBe("object")
})

test("getOfficeNumber() returns office number", () => {
    const ryan = new Manager("Ryan", 1, "ryanascherr@gmail.com", "410-292-1432");
    expect(ryan.getOfficeNumber()).toBe("410-292-1432")
})

test("Variable officeNumber returns office number", () => {
    const ryan = new Manager("Ryan", 1, "ryanascherr@gmail.com", "410-292-1432");
    expect(ryan.officeNumber).toBe("410-292-1432")
})

test("Returns role of Manager", () => {
    const ryan = new Manager("Ryan", 1, "ryanascherr@gmail.com", "410-292-1432");
    expect(ryan.getRole()).toBe("Manager")
})