const Manager = require("./lib/Manager");
// const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");

menu = () => {
    createManager = () => {
        inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: "Enter the manager's name",
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
  })
}   
createManager();
}

menu();