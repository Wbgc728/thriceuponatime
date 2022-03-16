// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js')
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([{
            type: 'input',
            message: "What is your project Title?",
            name: 'title',
        },

        {
            type: 'input',
            message: "Provide a short description explaining the what,why and how of your project",
            name: 'description',
        },

        {
            type: 'input',
            message: "What are the steps to install your project?",
            name: 'install',
        },

        {
            type: 'input',
            message: "Provide instructions and examples for use",
            name: 'usage',
        },

        {
            type: 'input',
            message: "List you collaborators",
            name: 'credits',
        },

        {
            type: 'input',
            message: "Provide any test instructions or examples",
            name: 'test',
        },

        {
            type: 'list',
            message: "What is your project Title?",
            choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
            name: 'license',
        },

        {
            type: 'input',
            message: "What's your github username?",
            name: 'github',
        },

        {
            type: 'input',
            message: "What's your email address?",
            name: 'email',
        },
    ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log("Sucess! Your README.md file has been created!")
    });

}

// TODO: Create a function to initialize app
const init = () => {
    questions()

    .then((answers => fs.writeFileSync('TempREADME.md', generateMarkdown(answers))))
        .then(() => console.log('Successfully wrote to README.md'))
        .catch((err) => console.error(err));
};

// Function call to initialize app
init();