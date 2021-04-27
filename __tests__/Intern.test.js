const Intern = require("../lib/Intern");

test("Can instantiate Intern instance", () => {
    const ryan = new Intern("Ryan", 1, "ryanascherr@gmail.com", "Loyola");
    expect(typeof(ryan)).toBe("object")
})

test("getSchool returns school", () => {
    const ryan = new Intern("Ryan", 1, "ryanascherr@gmail.com", "Loyola");
    expect(ryan.getSchool()).toBe("Loyola")
})

test("Variable school returns school", () => {
    const ryan = new Intern("Ryan", 1, "ryanascherr@gmail.com", "Loyola");
    expect(ryan.school).toBe("Loyola")
})

test("Returns role of Intern", () => {
    const ryan = new Intern("Ryan", 1, "ryanascherr@gmail.com", "Loyola");
    expect(ryan.getRole()).toBe("Intern")
})

