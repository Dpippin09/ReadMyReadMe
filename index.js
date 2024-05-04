// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
 const questions = [
    {
        type: "input",
        name: "title",
        messgae: "What is the name of your project?",
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please describe your project',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install you project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do we use your project',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose a liscense',
        choices: ['MIT', 'Apache2.0', 'none']
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please enter the contribution guidlines',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How to test your project',
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Please enter you contact information for the questions'
    },

];
  

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
    
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        console.log("creating a professional ReadMe file");
        writeToFile('README.md', generateMarkdown({...answers}));
    });
   
}

// Function call to initialize app
init();
