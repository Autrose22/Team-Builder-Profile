const Employee = require("../lib/Employee");

Test("creates an employee object", () => {
    const employee = new Employee("Rose Watson", "rw123456789", "rw123456789@gmail.com");

    expect(employee.name).toBe("Rose Watson");
    expect(employee.id).toBe("rw123456789");
    expect(employee.email).toBe("rw123456789@gmail.com"); 
});

test("gets employee's name", () => {
    const employee = new Employee("nameTest", "rw123456789", "rw123456789@gmail.com");
    expect(employee.getName()).toBe("nameTest");
});

test("gets employee's id", () => {
    const employee = new Employee("Rose Watson", "idTest", "rw123456789@gmail.com");
    expect(employee.getId()).toBe("idTest");
});

test("gets employee's email", () => {
    const employee = new Employee("Rose Watson", "rw123456789", "emailTest");
    expect(employee.getEmail()).toBe("emailTest");
});

test("gets employee's role as an object", () => {
    const employee = new Employee("Rose Watson", "rw123456789", "rw1234567@gmail.com");

    expect(employee.getRole()).toBe("Employee");
});