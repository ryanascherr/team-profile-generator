const Intern = require("../lib/Intern");

test("Can instantiate Employee instance", () => {
    const ryan = new Intern("Ryan", 1, "ryanascherr@gmail.com", "Loyola");
    expect(typeof(ryan)).toBe("object")
})

test("Returns name of Intern", () => {
    const ryan = new Intern("Ryan", 1, "ryanascherr@gmail.com", "Loyola");
    expect(ryan.getName()).toBe("Ryan")
})

test("Returns ID of Intern", () => {
    const ryan = new Intern("Ryan", 1, "ryanascherr@gmail.com", "Loyola");
    expect(ryan.getId()).toBe(1)
})

test("Returns email of Intern", () => {
    const ryan = new Intern("Ryan", 1, "ryanascherr@gmail.com", "Loyola");
    expect(ryan.getEmail()).toBe("ryanascherr@gmail.com")
})

test("Returns school of Intern", () => {
    const ryan = new Intern("Ryan", 1, "ryanascherr@gmail.com", "Loyola");
    expect(ryan.getSchool()).toBe("Loyola")
})

test("Returns role of Intern", () => {
    const ryan = new Intern("Ryan", 1, "ryanascherr@gmail.com", "Loyola");
    expect(ryan.getRole()).toBe("Intern")
})

