// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee")

class Engineer extends Employee {

    constructor(name, ID, email, GitHub) {
        this.name = name;
        this.ID = ID;
        this.email = email;
        this.GitHub = GitHub
    }




};

module.exports = Engineer;