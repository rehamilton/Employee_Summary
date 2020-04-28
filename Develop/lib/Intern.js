// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee")

class Intern extends Employee {

    constructor(name, ID, email, office, GitHub, school) {
        this.name = name;
        this.ID = ID;
        this.email = email;
        this.office = office;
        this.GitHub = GitHub
        this.school = school
    }

};

module.exports = Intern;