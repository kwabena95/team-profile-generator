// import inquirer
const inquirer = require('inquirer');
const { options } = require('yargs');
//  import all classes
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');

// team member class
class TeamMember {
    constructor() {
        this.teamMember;
    }

    getManager() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: "Enter team manager's name: ",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Team manager's name is required");
                        return false;
                    }
                }
            },
            {
                type: 'number',
                name: 'emp_ID',
                message: 'Enter employee id: ',
                validate: emp_IDInput => {
                    if (emp_IDInput) {
                        return true;
                    } else {
                        console.log("Employee id is required");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: 'Enter email address: ',
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log("Email is required");
                        return false;
                    }
                }
            },
            {
                type: 'number',
                name: 'officeNumber',
                message: 'Enter office number: ',
                validate: officeNumberInput => {
                    if (officeNumberInput) {
                        return true;
                    } else {
                        console.log("Office number is required");
                        return false;
                    }
                }
            }

        ]).then(({ name, emp_ID, email, officeNumber }) => {
            this.teamMember = new Manager(name, emp_ID, email, officeNumber);
            this.getMembers();
        });
    };



    getMembers() {
        inquirer.prompt([
            {
                type: 'confirm',
                name: 'confirmOptions',
                message: 'Would you like to add team members?: ',
                default: true
            },
            {
                type: 'list',
                name: 'options',
                message: 'Choose a team member: ',
                choices: ['Engineer', 'Intern'],
                when: ({ confirmOptions }) => confirmOptions
            }
        ])
            .then(({ options }) => {

                if (options === 'Engineer') {

                    inquirer.prompt([
                        {
                            type: 'input',
                            name: 'name',
                            message: "Enter engineer's name: ",
                            validate: nameInput => {
                                if (nameInput) {
                                    return true;
                                } else {
                                    console.log("Engineer's name is required");
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'number',
                            name: 'emp_ID',
                            message: 'Enter employee id: ',
                            validate: emp_IDInput => {
                                if (emp_IDInput) {
                                    return true;
                                } else {
                                    console.log("Employee id is required");
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'input',
                            name: 'email',
                            message: 'Enter email address: ',
                            validate: emailInput => {
                                if (emailInput) {
                                    return true;
                                } else {
                                    console.log("Email is required");
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'input',
                            name: 'gitHub',
                            message: 'Enter Github username: ',
                            validate: username => {
                                if (username) {
                                    return true;
                                } else {
                                    console.log("Github username is required");
                                    return false;
                                }
                            }
                        }

                    ]).then(({ name, emp_ID, email, gitHub }) => {
                        this.teamMember = new Engineer(name, emp_ID, email, gitHub);
                    });

                } else if (options === 'Intern') {

                    inquirer.prompt([
                        {
                            type: 'input',
                            name: 'name',
                            message: "Enter intern's name: ",
                            validate: nameInput => {
                                if (nameInput) {
                                    return true;
                                } else {
                                    console.log("Intern's name is required");
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'number',
                            name: 'emp_ID',
                            message: 'Enter employee id: ',
                            validate: emp_IDInput => {
                                if (emp_IDInput) {
                                    return true;
                                } else {
                                    console.log("Employee id is required");
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'input',
                            name: 'email',
                            message: 'Enter email address: ',
                            validate: emailInput => {
                                if (emailInput) {
                                    return true;
                                } else {
                                    console.log("Email is required");
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'input',
                            name: 'schoolName',
                            message: 'Enter school name: ',
                            validate: schoolNameInput => {
                                if (schoolNameInput) {
                                    return true;
                                } else {
                                    console.log("School name is required");
                                    return false;
                                }
                            }
                        }

                    ]).then(({ name, emp_ID, email, schoolName }) => {
                        this.teamMember = new Intern(name, emp_ID, email, schoolName);
                    });

                    this.repromptUser();
                }

            });

    }

    repromptUser() {
        inquirer.prompt([
            {
                type: 'confirm',
                name: 'confirmOptions',
                message: 'Would you like to add team members?: ',
                default: true
            },
            {
                type: 'list',
                name: 'options',
                message: 'Choose a team member: ',
                choices: ['Engineer', 'Intern'],
                when: ({ confirmOptions }) => confirmOptions
            }
        ]).then(this.getManager());
    }

}

// export class
module.exports = TeamMember;