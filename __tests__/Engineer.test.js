const Engineer = require("../lib/Engineer");

test("Can instantiate Engineer instance", () => {
    const ryan = new Engineer("Ryan", 1, "ryanascherr@gmail.com", "ryanascherr");
    expect(typeof(ryan)).toBe("object")
})

test("Returns name of Engineer", () => {
    const ryan = new Engineer("Ryan", 1, "ryanascherr@gmail.com", "ryanascherr");
    expect(ryan.getName).toBe("Ryan")
})

test("Returns ID of Engineer", () => {
    const ryan = new Engineer("Ryan", 1, "ryanascherr@gmail.com", "ryanascherr");
    expect(ryan.getId).toBe(1)
})

test("Returns email of Engineer", () => {
    const ryan = new Engineer("Ryan", 1, "ryanascherr@gmail.com", "ryanascherr");
    expect(ryan.getEmail).toBe("ryanascherr@gmail.com")
})

test("Returns GitHub username of Engineer", () => {
    const ryan = new Engineer("Ryan", 1, "ryanascherr@gmail.com", "ryanascherr");
    expect(ryan.getGithub).toBe("ryanascherr")
})

test("Returns role Engineer", () => {
    const ryan = new Engineer("Ryan", 1, "ryanascherr@gmail.com", "ryanascherr");
    expect(ryan.getRole).toBe("Engineer")
})

