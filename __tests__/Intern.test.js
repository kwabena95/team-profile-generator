const { test, expect } = require('@jest/globals');
const Intern = require('../lib/Intern');

test('create an intern object', () => {
    const intern = new Intern('Michael', 3, 'michael@mail.com', 'MTSU');

    expect(intern.name).toBe('Michael');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toBe('michael@mail.com');
    expect(intern.school).toBe('MTSU');

    expect(intern.getRole()).toBe('Intern');
});