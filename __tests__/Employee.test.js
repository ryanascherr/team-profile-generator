const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
    const ryan = new Employee("Ryan", 1, "ryanascherr@gmail.com");
    expect(typeof(ryan)).toBe("object")
})

test("Returns name of Employee", () => {
    const ryan = new Employee("Ryan", 1, "ryanascherr@gmail.com");
    expect(ryan.getName()).toBe("Ryan");
})

test("Returns ID of Employee", () => {
    const ryan = new Employee("Ryan", 1, "ryanascherr@gmail.com");
    expect(ryan.getId()).toBe(1);
})

test("Returns email of Employee", () => {
    const ryan = new Employee("Ryan", 1, "ryanascherr@gmail.com");
    expect(ryan.getEmail()).toBe("ryanascherr@gmail.com");
})

test("Returns role Employee", () => {
    const ryan = new Employee("Ryan", 1, "ryanascherr@gmail.com");
    expect(ryan.getRole()).toBe("Employee");
})