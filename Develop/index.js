// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
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
            choices: ['HTML', 'CSS', 'JAVASCRIPT']
        },
        {
            type: 'input',
            message: 'What is the link to the deployed application?',
            name: 'link'
        }
    ]);
};
    
const data = [];


// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}
const writeToFile = readMeData => {
('README.md', data => {

})
};

// TODO: Create a function to initialize app


// Function call to initialize app
questions()
    .then(answers => {
        
    });

