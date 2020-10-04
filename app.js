const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const teamMembers = [];
const idArray = [];
const emailArray = [];
const officeNumberArray = [];


function mainMenu() {
    function createManager() {
        console.log("please build your team");
        inquirer.prompt([
            {
            type: "input",
            name: "managerName",
            message: " what is your manager name?",
            validate: answer =>{
                if (answer !== "") {
                    return true;
                    
                }
                return "Please enter name"
            }
        },
        {
            type: "input",
            name: "managerId",
            message: " what is your manager Id Number?",
            validate: answer =>{
                if (answer !== "") {
                    return true;
                    
                }
                return "Please enter Id Number"
            }
        },
        {
            type: "input",
            name: "managerEmail",
            message: " what is your manager Email?",
            validate: answer =>{
                if (answer !== "") {
                    return true;
                    
                }
                return "Please enter Email"
            }
        },
        {
            type: "input",
            name: "managerOfficeNUmber",
            message: " what is your manager Office Number?",
            validate: answer =>{
                if (answer !== "") {
                    return true;
                    
                }
                return "Please enter Office Number"
            }
        },
    ]).then(answer => {
            const Manager = new Manager(answers.id)
            teamMembers.push(Manager)
            idArray.push(answer.managerId)
            emailArray.push(answer.managerEmail)
            officeNumberArray.push(answer.managerOfficeNumber)
        })
    }

    createManager()
}

mainMenu();



// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
