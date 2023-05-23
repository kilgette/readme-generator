const inquirer = require('inquirer');
const fs = require('fs');
const text = `
Lorem ipsum dolor sit amet, 

consectetur adipiscing elit, sed do eiusmod tempor 

incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,





quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
`
// $()
console.log(text);

inquirer
  .prompt([
    {
      type: 'input',
      name: 'projectTitle',
      message: 'Enter the project title:',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter the project description:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Enter installation instructions:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Enter usage information:',
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'Enter contribution guidelines:',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Enter test instructions:',
    },
    {
      type: 'list',
      message: 'Choose a license:',
      name: 'license',
      choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', 'None',],
    },
    {
      type: 'input',
      name: 'username',
      message: 'Enter your Github username:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address:',
    },
   
  ])
  .then((data) => {
    console.log(data);
    // const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });

//   // TODO: Include packages needed for this application

// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();