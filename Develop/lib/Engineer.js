// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee")

class Engineer extends Employee {

    constructor(name, ID, email, GitHub) {
        super (name, ID, email);
        this.GitHub = GitHub
    }

    getRole() {
        return "Engineer"
    }




};

module.exports = Engineer;