// import employee class
const Employee = require('./Employee');

// create manager class
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole() {
        super.getRole()
        return this.role = 'Manager';
    }
}

// export class
module.exports = Manager;