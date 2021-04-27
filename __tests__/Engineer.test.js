const Engineer = require("../lib/Engineer");

test("Can instantiate Engineer instance", () => {
    const ryan = new Engineer("Ryan", 1, "ryanascherr@gmail.com", "ryanascherr");
    expect(typeof(ryan)).toBe("object")
})

test("getGithub() returns github username", () => {
    const ryan = new Engineer("Ryan", 1, "ryanascherr@gmail.com", "ryanascherr");
    expect(ryan.getGithub()).toBe("ryanascherr")
})

test("Variable github returns github username", () => {
    const ryan = new Engineer("Ryan", 1, "ryanascherr@gmail.com", "ryanascherr");
    expect(ryan.github).toBe("ryanascherr")
})

test("Returns role of Engineer", () => {
    const ryan = new Engineer("Ryan", 1, "ryanascherr@gmail.com", "ryanascherr");
    expect(ryan.getRole()).toBe("Engineer")
})

