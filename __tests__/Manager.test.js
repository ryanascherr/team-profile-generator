const Manager = require("../lib/Manager");

test("Can instantiate Manager instance", () => {
    const ryan = new Manager("Ryan", 1, "ryanascherr@gmail.com", "410-292-1432");
    expect(typeof(ryan)).toBe("object")
})

test("Returns name of Manager", () => {
    const ryan = new Manager("Ryan", 1, "ryanascherr@gmail.com", "410-292-1432");
    expect(ryan.getName()).toBe("Ryan")
})

test("Returns ID of Manager", () => {
    const ryan = new Manager("Ryan", 1, "ryanascherr@gmail.com", "410-292-1432");
    expect(ryan.getId()).toBe(1)
})

test("Returns email of Manager", () => {
    const ryan = new Manager("Ryan", 1, "ryanascherr@gmail.com", "410-292-1432");
    expect(ryan.getEmail()).toBe("ryanascherr@gmail.com")
})

test("Returns office number of Manager", () => {
    const ryan = new Manager("Ryan", 1, "ryanascherr@gmail.com", "410-292-1432");
    expect(ryan.getOfficeNumber()).toBe("410-292-1432")
})

test("Returns role of Manager", () => {
    const ryan = new Manager("Ryan", 1, "ryanascherr@gmail.com", "410-292-1432");
    expect(ryan.getRole()).toBe("Manager")
})