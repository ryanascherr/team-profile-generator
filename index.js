const Manager = require("./lib/Manager");
// const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");

let listOfEngineers = [];
let listOfInterns = [];

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
  const manager = new Manager(name, id, email, officeNumber);
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
    if (options === "Add an intern") {
      createIntern();
    }
    // generateTeam();
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
      let engineer = new Engineer(name, id, email, github);
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
      ]).then(({name, id, email, github}) => {
      let engineer = new Engineer(name, id, email, github);
      listOfEngineers.push(engineer);
      console.log(engineer);
      console.log(listOfEngineers);
      menu();
})
}

createManager()