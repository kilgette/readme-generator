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
      choices: ['MIT', 'Apache 2.0','None',],
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
const readMe = generateMarkdown(data);


    fs.writeFile("generated_README.md",readMe, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });

  //generate content answers
 function generateMarkdown(answers){
  //initialize empty string 
  let readmeContent = '';
 readmeContent += `# ${answers.projectTitle}\n\n`;
 readmeContent += `## Description\n\n${answers.description}\n\n`;
 readmeContent += `## Installation\n\n${answers.installation}\n\n`;
 readmeContent += `## Usage\n\n${answers.usage}\n\n`;
 readmeContent += `## Contribution\n\n${answers.contribution}\n\n`;
 readmeContent += `## Tests\n\n${answers.tests}\n\n`;
 readmeContent += `## License\n\n${answers.license}\n\n`;
 readmeContent += `## Username\n\n${answers.username}\n\n`;
 readmeContent += `## Email\n\n${answers.email}\n\n`;
 return readmeContent
}
  
