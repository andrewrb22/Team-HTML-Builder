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


 async function prompt() {
    let responseDone = "";
    // prompt to collect input and use do while atleast one and do it number of times depending on the while condition
    do {
         try {
              response = await inquirer.prompt([

                   {
                        type: "input",
                        name: "name",
                        message: "What is the employee's name?: "
                   },
                   {
                        type: "input",
                        name: "id",
                        message: "Enter the employee's ID: "
                   },
                   {
                        type: "input",
                        name: "email",
                        message: "Enter the employee's email address: "
                   },
                   {
                        type: "list",
                        name: "role",
                        message: "What what is the employee's role:",
                        choices: [
                             "Engineer",
                             "Intern",
                             "Manager"
                        ]
                   }
              ]);

              let response2 = ""
              // if else statement

              if (response.role === "Engineer") {
                   response2 = await inquirer.prompt([{
                        type: "input",
                        name: "github",
                        message: "What is the employee's github username?:",
                   }, ]);
                   //store the object and push
                   const engineer = new Engineer(response.name, response.id, response.email, response2.github);
                   teamMembers.push(engineer);

              }
              
              else if (response.role === "Intern") {
                   response2 = await inquirer.prompt([{
                        type: "input",
                        name: "school",
                        message: "What school is the employee attending?:",
                   }, ]);
                   //store the object and push
                   const intern = new Intern(response.name, response.id, response.email, response2.school);
                   teamMembers.push(intern);
              } 
              
              else if (response.role === "Manager") {
                   response2 = await inquirer.prompt([{
                        type: "input",
                        name: "number",
                        message: "What is the employee's office number?:",
                   }, ]);
                   //store the object and push
                   const manager = new Manager(response.name, response.id, response.email, response2.number);
                   teamMembers.push(manager);
              }
         } catch (err) {
              return console.log(err);
         }
         console.log(teamMembers)
         

         responseDone = await inquirer.prompt([{
              type: "list",
              name: "finish",
              message: "Do you want to continue?: ",
              choices: [
                   "Yes",
                   "No"
              ]
         }, ]);

         // console.log(responseDone.choices);
         //the while parameter is saying continue running the code if the user selects "yes"
    } while (responseDone.finish === "Yes");

function htmlRenderer(){
     if(!fs.existsSync("./output")){
         fs.mkdirSync("./output")
     }
     fs.writeFile(outputPath, render(teamMembers) , (err)=>{
     if (err) throw err;
     console.log("The file was saved!");
 })
 }

htmlRenderer();

}
prompt();
















// function mainMenu() {
//     function createManager() {
//         console.log("please build your team");
//         inquirer.prompt([
//             {
//             type: "input",
//             name: "managerName",
//             message: " what is your manager name?",
//             validate: answer =>{
//                 if (answer !== "") {
//                     return true;
                    
//                 }
//                 return "Please enter name"
//             }
//         },
//         {
//             type: "input",
//             name: "managerId",
//             message: " what is your manager Id Number?",
//             validate: answer =>{
//                 if (answer !== "") {
//                     return true;
                    
//                 }
//                 return "Please enter Id Number"
//             }
//         },
//         {
//             type: "input",
//             name: "managerEmail",
//             message: " what is your manager Email?",
//             validate: answer =>{
//                 if (answer !== "") {
//                     return true;
                    
//                 }
//                 return "Please enter Email"
//             }
//         },
//         {
//             type: "input",
//             name: "managerOfficeNUmber",
//             message: " what is your manager Office Number?",
//             validate: answer =>{
//                 if (answer !== "") {
//                     return true;
                    
//                 }
//                 return "Please enter Office Number"
//             }
//         },
//     ]).then(answer => {
//             const Manager = new Manager(answers.id)
//             teamMembers.push(Manager)
            
//         })
//     }

//     createManager()
// }

// mainMenu();



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
