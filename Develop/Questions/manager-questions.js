
managerQuestions = [
    {
        type: "input",
        name: "manager",
        message: "Who is the manager of the division?",
        validate: function(input) {
            if(input === "") {
                return "Name must be entered";
            }else {
                return true
            }
        }
    },
    {
        type: "input",
        name: "managerId",
        message: "Please enter the manager's ID.",
        validate: function(input) {
            if(input === "") {
                return "ID must be entered";
            }else {
                return true
            }
        }
    },
    {
        type: "input",
        name: "managerEmail",
        message: "Please enter the manager's e-mail.",
        validate: function(input) {
            let email = input
            let emailcheck = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
            let emailtest = emailcheck.test(email)
            if(emailtest == false) {
                return "please enter valid email";
            }else {
                return true
            }
        }
    },
    {
        type: "input",
        name: "managerOfficeNumber",
        message: "What is the manager's office number?",
        validate: function(input) {
            if(input === "") {
                return "Office number must be entered";
            }else {
                return true
            }
        }
    }
]

module.exports = managerQuestions