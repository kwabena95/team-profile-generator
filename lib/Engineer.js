// import employee class
const Employee = require('./Employee');

// create engineer class
class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super(name, id, email);
        this.gitHub = gitHub;
    }

    getGitHub() {
        return this.gitHub;
    }

    getRole() {
        super.getRole()
        return this.role = 'Engineer';
    }
}

// export class
module.exports = Engineer;