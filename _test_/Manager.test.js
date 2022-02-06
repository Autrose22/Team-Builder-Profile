const Manager = require("../lib/Manager");

test("create a manager object", ()  => {
    const manager = new Manager("John Wick", "jw123456789", "jw123456789@gmail.com", "(123)-123-1234");

    expect(manager.name).toBe("John Wick");
    expect(manager.id).toBe("jw123456789");
    expect(manager.email).toBe("jw123456789@gmail.com");
    expect(manager.officeNumber).toBe("(123)-123-1234");
});

test("gets manager's name", () => {
    const manager = new Manager("John Wick", "jw123456789", "jw123456789@gmail.com", "(123)-123-1234");
    expect(manager.name).toBe("John Wick");
});

test("gets manager's id", () => {
    const manager = new Manager("John Wick", "jw123456789", "jw123456789@gmail.com", "(123)-123-1234");
    expect(manager.id).toBe("jw123456789");
});

test("gets manager's email", () => {
    const manager = new Manager("John Wick", "jw123456789", "jw123456789@gmail.com", "(123)-123-1234");
    expect(manager.email).toBe("jw123456789@gmail.com");
});

test("gets manager's office number", () => {
    const manager = new Manager("John Wick", "jw123456789", "jw123456789@gmail.com", "(123)-123-1234");
    expect(manager.officeNumber).toBe("(123)-123-1234");
});

test("gets manager's role as object", () => {
    const manager = new Manager("John Wick", "jw123456789", "jw123456789@gmail.com", "(123)-123-1234");
    
    expect(manager.getRole()).toBe("Manager");
});