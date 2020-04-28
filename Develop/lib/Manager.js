// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

const Employee = require("./Employee")

class Manager extends Employee {

    constructor(name, ID, email, office) {
        this.name = name;
        this.ID = ID;
        this.email = email;
        this.office = office;
    }

};

module.exports = Manager;