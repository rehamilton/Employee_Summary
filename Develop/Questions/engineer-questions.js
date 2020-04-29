

engineerQuestions = [
    {
        type: "input",
        name: "engineer",
        message: "What is the engineer's name?",
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
        name: "engineerId",
        message: "Please enter this engineer's ID.",
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
        name: "engineerEmail",
        message: "Please enter this engineer's e-mail.",
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
        name: "engineerGithub",
        message: "What is this engineer's GitHub name?",
        validate: function(input) {
            if(input === "") {
                return "GitHub name must be entered";
            }else {
                return true
            }
        }
    }
]

module.exports = engineerQuestions