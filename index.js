//node modules

const inquruer = require("inquirer");
const fs = require("fs");
const generatTeam = require("");

//lib modules
const Engineer = require("")
const Intern = require("")
const Manager = require("");
const inquirer = require("inquirer");

// Array for answers to questions
const newStaffMemberData = [];

// array of object questions asked in CLI to users
const questions = async () => {
    const anwers = await inquirer
    .prompt([
        {
            type:"input",
            message:"What is your name?",
            name:"name",
        },
        {
            type:"input",
            message:"What is your ID",
            name:"id",
        },
        {
            type:"input",
            message:"What is your email",
            name:"email",
        },
        {
            type:"list",
            message:"What is your role? ",
            name:"role",
            choices:["Engineer", "Intern", "Manger"], 
        },
    ])

    
}