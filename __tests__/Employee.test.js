const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
    const ryan = new Employee();
    expect(typeof(ryan)).toBe("object")
})

test("getName() returns name", () => {
    const ryan = new Employee("Ryan");
    expect(ryan.getName()).toBe("Ryan");
})

test("Variable name returns name", () => {
    const ryan = new Employee("Ryan");
    expect(ryan.name).toBe("Ryan");
})

test("getID() returns ID", () => {
    const ryan = new Employee("Ryan", 1);
    expect(ryan.getId()).toBe(1);
})

test("variable id returns id", () => {
    const ryan = new Employee("Ryan", 1);
    expect(ryan.id).toBe(1);
})

test("getEMail() returns email", () => {
    const ryan = new Employee("Ryan", 1, "ryanascherr@gmail.com");
    expect(ryan.getEmail()).toBe("ryanascherr@gmail.com");
})

test("Variable email returns email", () => {
    const ryan = new Employee("Ryan", 1, "ryanascherr@gmail.com");
    expect(ryan.email).toBe("ryanascherr@gmail.com");
})

test("Returns role Employee", () => {
    const ryan = new Employee("Ryan", 1, "ryanascherr@gmail.com");
    expect(ryan.getRole()).toBe("Employee");
})