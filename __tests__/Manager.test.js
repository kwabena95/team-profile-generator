const { test, expect } = require('@jest/globals');
const Manager = require('../lib/Manager');

test('create a manager object', () => {
    const manager = new Manager('Tom', 4, 'tom@mail.com', 1);

    expect(manager.name).toBe('Tom');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toBe('tom@mail.com');
    expect(manager.officeNumber).toEqual(expect.any(Number));

    expect(manager.getRole()).toBe('Manager');
});