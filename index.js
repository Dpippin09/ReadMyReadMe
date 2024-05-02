// TODO: Include packages needed for this application
const { renderLiscenseBadge, renderLiscenseLink, renderLiscenseSection}
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
        name: 'liscense',
        message: 'Please choose a liscense',
        choices: ['MIT', 'Apache2.0', 'none']
    },
    {
        type: 'input',
        name: 'contrinuting',
        message: 'Please enter the contribution guidlines',
    },
    {
        type: 'input',
        name: 'test',
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
    FileSystem.writeFileSync(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        }
        console.log("Successfully wrote to" + fileName);
    });
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
