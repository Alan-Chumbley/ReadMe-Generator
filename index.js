const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user

const questions = [
    //Git hub name
    {
        type: 'input',
        name: "GitHubName",
        message: 'What is your GitHub username? '

    },
    //email
    {
        type: 'input',
        name: "Email",
        message: 'What is your Email address? '

    },
    //project name
    {
        type: 'input',
        name: "Project",
        message: 'What is the name of your Project? Name it something cool and Unique: '

    },
  //project description
    {
        type:'input',
        name: 'Description',
        message: 'Please add a decription of the functionality of your project: ',
        
    },
    //license selector
    { 
        type:'checkbox',
        name: 'License',
        message: 'Please select a suitable liscence that reflects your project:  ',
        choices: [ "MIT", "Apache2.0", "GPL 3.0","BSD 3","none" ]
    },
    //dependencies
    {
        type:'input',
        name: 'Dependencies',
        message: 'What commmand should be run to installl dependencies? '
        
    },
    //testing
    {
        type:'input',
        name: 'Tests',
        message: 'What commmand should be entered to run tests? '
        
    },
    //user info
    {
        type:'input',
        name: 'RepoInfo',
        message: 'What does the user need to know about using the repo?  '
        
    },
    //contributions 
    {
        type:'input',
        name: 'Contributing',
        message: 'What does a user need to know about contrubuting to the repo? '
        
    },
    {
        type:'input',
        name: 'Image',
        message: 'what is the path to the image?'
    },
    
    

];
// console.log(questions);

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName),data)
}

// function to initialize program
function init() {
inquirer.prompt(questions).then((responses)=>{
    writeToFile("readme",generateMarkdown({...responses}))
console.log("Generating READMe.md ..."+responses);
})
}

// // function call to initialize program
init();
