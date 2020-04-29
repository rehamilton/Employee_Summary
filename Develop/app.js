const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const managerQuestions = require("./Questions/manager-questions");
const engineerQuestions = require("./Questions/engineer-questions");
const internQuestions = require("./Questions/intern-questions");

const orgPositions = []

function start(managerQuestions, engineerQuestions, internQuestions) {

    //starting function
    newManager(managerQuestions)

    // start with top of structure - manager
    function newManager() {

        inquirer
        .prompt(managerQuestions)
        .then(response => {
            const manager = new Manager(response.manager, response.managerId, response.managerEmail, response.managerOfficeNumber)
            orgPositions.push(manager)
            teamMembers()
    })
    }

    //Ask what positions manager wants to add to the organisationla structure
    function teamMembers() {
        inquirer
        .prompt([{
            type: "list",
            name: "teamMember",
            message: "Which positions would you like to add to your team?",
            choices: [
                "Engineer",
                "Intern",
                "Finished adding to my team"
            ]
            }])
        .then(choice => {
            switch(choice.teamMember) {
                case "Engineer":
                    newEngineer(engineerQuestions)
                    break;
                case "Intern":
                    newIntern(internQuestions)
                    break;
                case "Finished adding to my team":
                    orgStructure(orgPositions)
            }
        })
    }
    
    //Get Engineer information
    function newEngineer(engineerQuestions) {

        inquirer
        .prompt(engineerQuestions)
        .then(response => {
            const engineer = new Engineer(response.engineer, response.engineerId, response.engineerEmail, response.engineerGithub);
            orgPositions.push(engineer);
            teamMembers();
        })
        
    }

    //Get Intern information
    function newIntern(internQuestions) {

        inquirer
        .prompt(internQuestions)
        .then(response => {
            const intern = new Intern (response.intern, response.minternId, response.internEmail, response.internSchool);
            orgPositions.push(intern);
            teamMembers();
        })
        
    }

    //create organisational structure using the organisational position array
    function orgStructure(orgPositions) {

        if (!fs.existsSync(OUTPUT_DIR)) {
            fs.mkdirSync(OUTPUT_DIR)
        }
        
        fs.writeFileSync(outputPath, render(orgPositions), "UTF-8");

        console.log("Organisational Structure Ready for viewing in output folder");
    } 

}

//start the main function
start(managerQuestions, engineerQuestions, internQuestions)

