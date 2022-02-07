const Engineer = require("../lib/Engineer");

Test("create an engineer object", () => {
    const engineer = new Engineer("Tim Drak", "td123456789", "td123456789@gmail.com", "td1230");

    expect(engineer.name).toBe("Tim Drak");
    expect(engineer.id).toBe("td123456789");
    expect(engineer.email).toBe("td123456789@gmail.com");
    expect(engineer.github).toBe("td1230");
});

test("gets engineer's name", () => {
    const engineer = new Engineer("Tim Drak", "td123456789", "td123456789@gamil.com", "td1230");
    expect(engineer.name).toBe("Tim Drak");
});

test("gets engineer's id", () => {
    const engineer = new Engineer("Tim Drak", "td123456789", "td123456789@gamil.com", "td1230");
    expect(engineer.id).toBe("td32001458");
});

test("gets engineer's email", () => {
    const engineer = new Engineer("Tim Drak", "td123456789", "td123456789@gamil.com", "td1230");
    expect(engineer.email).toBe("td32001458@gmail.com");
});

test("gets engineer's github", () => {
    const engineer = new Engineer("Tim Drak", "td123456789", "td123456789@gamil.com", "td1230");
    expect(engineer.github).toBe("td1230");
});

test("gets engineer's role as object", () => {
    const engineer = new Engineer("Tim Drak", "td123456789", "td123456789@gamil.com", "td1230");

    expect(engineer.getRole()).toBe("Engineer");
});
