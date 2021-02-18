// import employee class
const Employee = require('./Employee');

// create intern class
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        super.getRole()
        return this.role = 'Intern';
    }
}

// export class
module.exports = Intern;