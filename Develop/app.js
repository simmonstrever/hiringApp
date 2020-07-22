const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

//need to do, use filesystem to create Path.. output is a directory then create file that is team.html fileSync
const OUTPUT_DIR = path.resolve(__dirname, "output"); //fs.mkdirSync
const outputPath = path.join(OUTPUT_DIR, "team.html"); //fs.filesync with path and content is return of render function store render function into a variable and pass it through write file sync call as last thing

const render = require("./lib/htmlRenderer");
const teamManager;
const team = [];


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

const questions = [{
    type: "input",
    message: "what is your name?",
    name: "name"
}];
inquirer.prompt(questions).then(answers => {

        // function to create manager, always a manager 
        

        //create engineer

        //create intern

        //function to create whole team
            //switch role use role to execute creation of team member
              
})

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

render();

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
