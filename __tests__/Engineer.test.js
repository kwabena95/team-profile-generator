
const Engineer = require('../lib/Engineer');

test('create an engineer object', () => {
    const engineer = new Engineer('Mary', 2, 'mary@mail.com', '_maryNeer');

    expect(engineer.name).toBe('Mary');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toBe('mary@mail.com');
    expect(engineer.gitHub).toBe('_maryNeer');

    expect(engineer.getRole()).toBe('Engineer');

});