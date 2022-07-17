// TODO: Include packages needed for this application
const inquierer = require('inquirer');

inquierer.prompt([
{
    type: 'input',
    name: 'Project Title',
    message: " what is the title of the project?",
},
{
    type: 'input',
    name: "Description",
    message: "what is the description of the project.?",
},
{
    type: 'input',
    name: "installation instructions",
    message: "please enter installation instructions."
},
{
    type: 'input',
    name: "usage information",
    message: "enter information about the applications usage."
},
{
    type: 'input',
    name: 'contribution guidelines',
    message: "what were the contribution guidelines?",

},
{
   type: 'list',
   message: "Choose a license",
   choices: [
       "license1", "license1", "license1", "license1", "license1", "license1", "license1"
    ],
    name: "license",
   
},
{
    type: 'input',
    name: 'GutHub username',
    message: 'please enter your github username.',

},
{
    type: 'input',
    name: 'email',
    message: 'please enter your email address.',
    value:"email"
}]).then((name) => {
    console.log(name);

});

// TODO: Create an array of questions for user input
// const questions = [
//     {
//         type: 'input',
//         name: 'Project Title',
//         message: " what is the title of the project?"
//     },
//     {
//         type: 'input',
//         name: "Description",
//         message: "what is the description of the project.?"
//     },
//     {
//         type: 'input',
//         name: "installation instructions",
//         message: "please enter installation instructions."
//     },
//     {
//         type: 'input',
//         name: "usage information",
//         message: "enter information about the applications usage."
//     },
//     {
//         type: 'input',
//         name: "contribution guidelines",
//         message: "what were the contribution guidelines?",
//         value:''
//     },
//     {
//        type: 'list',
//        name: "license",
//        message: "Choose a license",
//        choice: [
//            "license1", "license1", "license1", "license1", "license1", "license1", "license1"
//        ],
//        value: 'licenses'
//     },
//     {
//         type: 'input',
//         name: 'GutHub username',
//         message: 'please enter your github username.',
//         value: 'github username'
//     },
//     {
//         type: 'input',
//         name: 'email',
//         message: 'please enter your email address.',
//         value:"email"
//     }
// ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
