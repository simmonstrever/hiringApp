const Employee = require("./Employee");

// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee2 = require("./Employee.js");

class Engineer extends Employee2 {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getGithub(){
        return this.github;
    }
    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;