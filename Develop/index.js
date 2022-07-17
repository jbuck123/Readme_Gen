// TODO: Include packages needed for this application
const inquierer = require('inquirer');

inquierer.prompt([
    {
    type: 'input',
    name: 'age',
    message: 'Please enter your age.'
    // pass a question here that returns a promis 
    }, // this is how u get multiple prompts 
    {
        type: "input",
        name: 'user_name',
        message: 'please enter your name.'
    }, // another prompt
    { 
    type: 'list',
    name: 'places',
    message: 'please select your fav place from the list',
    choices: ['minneapolis', 'Boston', 'LA']
    },
    {
        type: 'checkbox',
        name: 'choice',
        messager: 'select your fave games',
        choices: [ // this returns the value 
            { name: 'call of duty', value: 'shooter' },
            {name: 'minecraft', value: 'sandbox'},
            { name: 'Runescape', value: 'MMO'}, 
        ],
    }
]).then((data) => {
    console.log(data);

});

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
