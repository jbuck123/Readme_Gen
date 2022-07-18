// TODO: Include packages needed for this application
const inquierer = require('inquirer');
const fs = require('fs');



// an array for the questoins 
const questions = [
    {
        type: 'input',
        name: 'title',
        message: " what is the title of the project?"
    },
    {
        type: 'input',
        name: "description",
        message: "what is the description of the project.?"
    },
    {
        type: 'input',
        name: "install_instructions",
        message: "please enter installation instructions."
    },
    {
        type: 'input',
        name: "usage_information",
        message: "enter information about the applications usage."
    },
    {
        type: 'input',
        name: "contribution_guidelines",
        message: "what were the contribution guidelines?",
       
    },
    {
       type: 'list',
       name: "license",
       message: "Choose a license",
       choices: [
           "MIT", "IBM", "license1", "license1", "license1", "license1", "license1"
       ],
     // mit 
       
    },
    {
        type: 'input',
        name: 'github_username',
        message: 'please enter your github username.',
       
    },
    {
        type: 'input',
        name: 'email',
        message: 'please enter your email address.',
        
    }
];


// function that writes 
inquierer.prompt(questions).then((answer) => {
    console.log(answer);
    const pageContent = writeToPage(answer)
    fs.writeFile('readme.md', pageContent, (err) => {
        err ? console.log(err): console.log("its working")
      if (answer.name === 'MIT'){
          answer.name = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
      }
    })

});
function writeToPage(answer){
    return`
# ${answer.title}
## Description
    ${answer.description}
## Install Instructions 
    ${answer.install_instructions}
## Usage Information
    ${answer.usage_information}
## Contribution Guidelines
    ${answer.contribution_guidelines}
### License
    ${answer.license}
## Contact me
    ${answer.github_username}
    ${answer.email}
    `
}
// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();
