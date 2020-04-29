

internQuestions = [
    {
        type: "input",
        name: "intern",
        message: "What is the intern's name?",
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
        name: "internId",
        message: "Please enter this intern's ID.",
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
        name: "internEmail",
        message: "Please enter this intern's e-mail.",
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
        name: "internSchool",
        message: "What school does this intern come from?",
        validate: function(input) {
            if(input === "") {
                return "School must be entered";
            }else {
                return true
            }
        }
    }
]

module.exports = internQuestions