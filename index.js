const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");
// const { clear } = require("console");

let manager;
let intern;
let engineer;
let listOfEngineers = [];
let listOfInterns = [];
let test;

const generateHTML = () =>
`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./src/style.css">
    <title>Team Builder</title>
</head>
<body>
    <header class="title">
        <h1>Team Builder</h1>
    </header>
    <div id="card-container">
    ${managerCard}
    ${engineerCard}
    ${internCard}
    </div>
`;

createManager = () => {
  inquirer.prompt([
    {
    type: 'input',
    name: 'name',
    message: "What is the manager's name?",
    },
    {
    type: 'input',
    name: 'id',
    message: "What is the team manager's id?",
    },
    {
    type: 'input',
    name: 'email',
    message: "What is the team manager's email?",
    },
    {
    type: 'input',
    name: 'officeNumber',
    message: "What is the team manager's office number?",
    },
  ]).then(({name, id, email, officeNumber}) => {
  manager = new Manager(name, id, email, officeNumber);
  console.log(manager);
  menu();
})
}

menu = () => {
  inquirer.prompt([
    {
    type: 'list',
    name: 'options',
    message: "Do you want to add another member to your team?",
    choices: ["Add an engineer", "Add an intern", "Nope, all good!"]
    },
  ]).then(({options}) => {
    if (options === "Add an engineer") {
      createEngineer();
    }
    else if (options === "Add an intern") {
      createIntern();
    } else {
      generateTeam();
    }
  })
}

createEngineer = () => {
  inquirer.prompt([
    {
    type: 'input',
    name: 'name',
    message: "What is the engineer's name?",
    },
    {
    type: 'input',
    name: 'id',
    message: "What is the engineer's id?",
    },
    {
    type: 'input',
    name: 'email',
    message: "What is the engineer's email?",
    },
    {
    type: 'input',
    name: 'github',
    message: "What is the engineer's github username?",
    },
  ]).then(({name, id, email, github}) => {
  engineer = new Engineer(name, id, email, github);
  listOfEngineers.push(engineer);
  console.log(engineer);
  console.log(listOfEngineers);
  menu();
})
}

createIntern = () => {
  inquirer.prompt([
    {
    type: 'input',
    name: 'name',
    message: "What is the intern's name?",
    },
    {
    type: 'input',
    name: 'id',
    message: "What is the intern's id?",
    },
    {
    type: 'input',
    name: 'email',
    message: "What is the intern's email?",
    },
    {
    type: 'input',
    name: 'school',
    message: "What school does the intern go to?",
    },
  ]).then(({name, id, email, school}) => {
  intern = new Intern(name, id, email, school);
  listOfInterns.push(intern);
  console.log(intern);
  console.log(listOfInterns);
  menu();
})
}

generateTeam = (name, id, email, other) => {
  managerCard = 
    `<div class="card">
      <header>
          <h3 id="name">${manager.name}</h3>
          <h4 id="role">Manager</h4>
      </header>
      <div class="body">
          <ul>
              <li>${manager.id}</li>
              <li>${manager.email}</li>
              <li>${manager.officeNumber}</li>
          </ul>
      </div>
    </div>`;

  if (!engineer) {
    engineerCard = "";
  } else {engineerCard = 
    `<div class="card">
      <header>
          <h3 id="name">${engineer.name}</h3>
          <h4 id="role">Engineer</h4>
      </header>
      <div class="body">
          <ul>
              <li>${engineer.id}</li>
              <li>${engineer.email}</li>
              <li>${engineer.github}</li>
          </ul>
      </div>
    </div>`;}
  
  if (!intern) {
    internCard = "";
  } else {
    internCard = 
    `<div class="card">
      <header>
          <h3 id="name">${intern.name}</h3>
          <h4 id="role">Intern</h4>
      </header>
      <div class="body">
          <ul>
              <li>${intern.id}</li>
              <li>${intern.email}</li>
              <li>${intern.school}</li>
          </ul>
      </div>
    </div>`;
  }
  
  // for (let i = 0; i < listOfEngineers.length; i++) {
  //   test += `<h1>${listOfEngineers[i].name}</h1>`;
  // }
  const HTMLPageContent = generateHTML(name, id, email, other);

    fs.writeFile('index2.html', HTMLPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
}

createManager()