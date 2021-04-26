const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");

let manager;
let intern;
let internCard = "";
let engineer;
let engineerCard = "";
let listOfEngineers = [];
let listOfInterns = [];

const generateHTML = () =>
`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="./src/style.css">
    <title>Team Builder</title>
</head>
<body>
    <header class="title">
        <h1>My Team</h1>
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
        <h2 id="name">${manager.name}</h2>
        <div class="flex-center">
          <h3 class="icon"><i class="material-icons">free_breakfast</i></h3>
          <h3 id="role">Manager</h3>
        </div>
      </header>
      <div class="body">
          <ul>
              <li>ID: ${manager.id}</li>
              <li>Email: <a href = "mailto: ${manager.email}" target="_blank">${manager.email}</a></li>
              <li>Office Number: ${manager.officeNumber}</li>
          </ul>
      </div>
    </div>`;

  if (!engineer) {
    engineerCard = "";
  } else {
    for (let i = 0; i < listOfEngineers.length; i++) {
    engineerCard += 
      `<div class="card">
        <header>
          <h2 id="name">${listOfEngineers[i].name}</h2>
          <div class="flex-center">
            <h3 class="icon"><i class="material-icons">build</i></h3>
            <h3 id="role">Engineer</h3>
          </div>
        </header>
        <div class="body">
            <ul>
                <li>ID: ${listOfEngineers[i].id}</li>
                <li>Email: <a href = "mailto: ${listOfEngineers[i].email}" target="_blank">${listOfEngineers[i].email}</a></li>
                <li>GitHub: <a href = "https://github.com/${listOfEngineers[i].github}" target="_blank">${listOfEngineers[i].github}</a></li>
            </ul>
        </div>
      </div>`;}
  }  
  
  if (!intern) {
    internCard = "";
  } else {
    for (let i = 0; i < listOfInterns.length; i++) {
    internCard += 
      `<div class="card">
        <header>
          <h2 id="name">${listOfInterns[i].name}</h2>
          <div class="flex-center">
            <h3 class="icon"><i class="material-icons">phone_in_talk</i></h3>
            <h3 id="role">Intern</h3>
          </div>
        </header>
        <div class="body">
            <ul>
                <li>ID: ${listOfInterns[i].id}</li>
                <li>Email: <a href = "mailto: ${listOfInterns[i].email}" target="_blank">${listOfInterns[i].email}</a></li>
                <li>School: ${listOfInterns[i].school}</li>
            </ul>
        </div>
      </div>`;}
  }

  const HTMLPageContent = generateHTML(name, id, email, other);

    fs.writeFile('index.html', HTMLPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
}

createManager()