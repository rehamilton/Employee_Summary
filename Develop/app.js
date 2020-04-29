const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

//declare where the output folder name 
const OUTPUT_DIR = path.resolve(__dirname, "output")
//Join the output file to the output folder to create a full directory address
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
            //add answers to constructor constructor to create new object
            const manager = new Manager(response.manager, response.managerId, response.managerEmail, response.managerOfficeNumber)
            //push new object to orgPositions
            orgPositions.push(manager)
            //Ask if any other positions to be added
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
                // if Engineer chosen run engineer function with engineer questions
                case "Engineer":
                    newEngineer(engineerQuestions)
                    break;
                // if Intern chosen run intern function with intern questions
                case "Intern":
                    newIntern(internQuestions)
                    break;
                // if finished then start to run organisational structure construction
                case "Finished adding to my team":
                    orgStructure(orgPositions)
                    break
                default:
                    orgStructure(orgPositions)
                    break
            }
        })
    }
    
    //Get Engineer information
    function newEngineer(engineerQuestions) {

        inquirer
        .prompt(engineerQuestions)
        .then(response => {
            //add answers to constructor constructor to create new object
            const engineer = new Engineer(response.engineer, response.engineerId, response.engineerEmail, response.engineerGithub);
            //push new object to orgPositions
            orgPositions.push(engineer);
            //Ask if any other positions to be added
            teamMembers();
        })
        
    }

    //Get Intern information
    function newIntern(internQuestions) {

        inquirer
        .prompt(internQuestions)
        .then(response => {
            //add answers to constructor constructor to create new object
            const intern = new Intern (response.intern, response.minternId, response.internEmail, response.internSchool);
            //push new object to orgPositions
            orgPositions.push(intern);
            //Ask if any other positions to be added
            teamMembers();
        })
        
    }

    //create organisational structure using the organisational position array
    function orgStructure(orgPositions) {

        try{
            //console.log(orgPositions);

            //render the organisation positions to HTML
            const division = render(orgPositions)

            //write file to directory address using the rendered organisation Positions
            fs.writeFileSync(outputPath, division);

            //notify user of success
            console.log("Organisational Structure Ready for viewing in output folder");

        }catch(err) {
            //notify user of error
            console.log(err);
        }        
    } 

}

//start the main function
start(managerQuestions, engineerQuestions, internQuestions)

