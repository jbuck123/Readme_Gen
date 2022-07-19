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
           "MIT", "IBM", "ISC", "UNLICENSED"
       ],
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


// function that writes to the read me

    function writeToPage(answer) {
        if(answer.license === 'MIT' ){
            var badge  = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
            var licenseText = 'Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:'
        }
        else if ( answer.license === 'IBM'){
            var badge = '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)'
            var licenseText = 'Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:'
        }
        else if (answer.license === 'ISC'){
            var badge = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
            var licenseText = 'Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:'
        } else { 
            var licenseText = 'UNLICENSED'
            var badge = '';
        }
        console.log(licenseText, badge);
    fs.writeFile('README.md',`
# ${answer.title}
## Description
    ${answer.description}
## Table of Contents
- [installation](#installation)
- [usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation
    ${answer.install_instructions}
## Usage Information
    ${answer.usage_information}
## Contribution Guidelines
    ${answer.contribution_guidelines}
### License ${answer.license}
${badge}

${licenseText}
## Contact me
    ${answer.github_username}
    ${answer.email}
    `, (err) =>{
                if(err) {
                    console.log(err);
                }else {
                    console.log("its working")
                        }   
                }
 )};
// TODO: Create a function to initialize app
function init() {
    inquierer.prompt(questions).then((answer) => {
        writeToPage(answer)
    }
)}

// Function call to initialize app
init();
