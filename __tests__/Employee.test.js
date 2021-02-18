// import employee class
const Employee = require('../lib/Employee');

// jest.mock('../lib/Employee.js');
test('create an employee object', () => {
    const employee = new Employee('Adam', 1, 'adam@mail.com');

    expect(employee.name).toBe('Adam');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('adam@mail.com');
    expect(employee.getRole()).toBe('Employee');

});