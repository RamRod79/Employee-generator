//  Packages needed for this application
// const path = require("path");
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateHTML = require("./src/generateHTML")
const fs = require("fs");

//Tracks employees info
const managers = [];
const engineers = [];
const interns = [];

// Function to ask input for Manager
// Array of questions for user input

function createManager() {
    inquirer
    .prompt([
{
    type: "input",
    name: "name",
    message: "What is the Manager's name?",
  },

  {
    type: "input",
    name: "id",
    message: "What is the Manager's id?",
  },

  {
    type: "input",
    name: "email",
    message: "What is the Manager's email?",
  },

  {
    type: "input",
    name: "officeNumber",
    message: "What is the Manager's office number?",
  },

   ]).then(function(answers) {
    const {id, email, name, officeNumber} = answers
    managers.push(new Manager(id, email, name, officeNumber));

    createTeam();
   })
}

function createEngineer() {
    inquirer
    .prompt([
{
    type: "input",
    name: "name",
    message: "What is the Engineer's name?",
  },

  {
    type: "input",
    name: "id",
    message: "What is the Engineer's id?",
  },

  {
    type: "input",
    name: "email",
    message: "What is the Engineer's email?",
  },

  {
    type: "input",
    name: "github",
    message: "What is the Engineer's github username",
  },

   ]).then(function(answers) {
    const {id, email, name, github} = answers
    engineers.push(new Engineer(id, email, name, github));
    createTeam();
   });
}

function createIntern() {
    inquirer
    .prompt([
{
    type: "input",
    name: "name",
    message: "What is the Intern's name?",
  },

  {
    type: "input",
    name: "id",
    message: "What is the Intern's id?",
  },

  {
    type: "input",
    name: "email",
    message: "What is the Intern's email?",
  },

  {
    type: "input",
    name: "school",
    message: "What is the Intern's school?",
  },

   ]).then(function(answers) {
    const {id, email, name, school} = answers
    interns.push(new Intern(id, email, name, school));
    createTeam();
   });
}

function createTeam() {
    inquirer
    .prompt([
        {
            type: "list",
            name: "menuOption",
            message: "Which type of employee would you like to add?",
            choices: ['Intern', 'Engineer', 'None']
          },

    ]).then(function(answers) {

        switch(answers.menuOption) {
            case 'Intern':
            createIntern();
            break;
            case 'Engineer':
            createEngineer();
            break;
            default:
                fs.writeFileSync('./dist/team.html',generateHTML({ managers, engineers, interns }));
                return;
        }
    });

}

createManager();


  
  