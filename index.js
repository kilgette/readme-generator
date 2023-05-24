const inquirer = require('inquirer');
const fs = require('fs');
const text = `This is a ReadMe Generator. Please follow the prompts below.`

// $()
console.log(text);

// function promptUser() {
//   return new Promise((resolve, reject) => {

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
    writeToFile(generateMarkdown(data));


    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });

  
