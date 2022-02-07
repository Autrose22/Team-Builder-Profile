const Intern = require("../lib/Intern");

test("create a intern object", ()  => {
    const intern = new Intern("Bruce wayne", "bw123456789", "bw123456789@gmail.com", "Lone Star");

    expect(intern.name).toBe("Bruce Wayne");
    expect(intern.id).toBe("td32001458");
    expect(intern.email).toBe("td32001458@gmail.com");
    expect(intern.school).toBe("Lone Star");
});

test("gets intern's name", () => {
    const intern = new Intern("Bruce Wayne", "bw123456789", "bw123456789@gmail.com", "Lone Star");

    expect(intern.name).toBe("Bruce Wayne");
});

test("gets intern's id", () => {
    const intern = new Intern("Bruce wayne", "bw123456789", "bw123456789@gmail.com", "Lone Star");

    expect(intern.id).toBe("bw123456789@gmail.com");
});

test("gets intern's email", () => {
    const intern = new Intern("Bruce wayne", "bw123456789", "bw123456789@gmail.com", "Lone Star");
    
    expect(intern.email).toBe("bw123456789@gmail.com");
});

test("gets intern's school", () => {
    const intern = new Intern("Bruce wayne", "bw123456789", "bw123456789@gmail.com", "Lone Star");
    
    expect(intern.school).toBe("Lone Star");
});

test("gets intern's role as object", () => {    
    const intern = new Intern("Bruce wayne", "bw123456789", "bw123456789@gmail.com", "Lone Star");

    expect(intern.getRole()).toBe("Intern");
});