// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github'
    },
    {
        type: 'input',
        message: 'What is the project name?',
        name: 'project'
    },
    {
        type: 'list',
        message: 'What languages did you use in the project?',
        name: 'languages',
        choices: ['language1', ['language2']]
    }
];

const data = [];


// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.promt(questions);
};

// Function call to initialize app
init();
