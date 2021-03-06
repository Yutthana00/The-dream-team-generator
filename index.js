//node modules
const inquirer = require("inquirer");
const fs = require("fs");
const generateTeam = require("./src/page-template.js");

//lib modules
const Engineer = require("./lib/Engineer"); 
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

// Array for answers to questions
const newStaffMemberData = [];

// array of object questions asked in CLI to users
const questions = async () => {
    const answers = await inquirer
    .prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "name",
        },
        {
            type: "input",
            message: "What is your ID",
            name: "id",
        },
        {
            type: "input",
            message: "What is your email",
            name: "email",
        },
        {
            type: "list",
            message: "What is your role? ",
            name: "role",
            choices: ["Engineer", "Intern", "Manger"], 
        },
    ])

// log answers to corresponding question:
    //If manager is selected:
    if (answers.role === "Manager") {
        const managerAns = await inquirer
        .prompt([
                {
                    type: "input",
                    message: "What is your office number?",
                    name: "officeNumber",
                },
            ])
            const newManager = new Manager(
                answers.name,
                answers.id,
                answers.email,
                managerAns.officeNumber
            );
            newStaffMemberData.push(newManager);

    //If Engineer is selected:
    } else if (answers.role === "Engineer") {
        const githubAns = await inquirer
        .prompt([
            {
                type:"input",
                message:"What is your Github UserName?",
                name:"Github", 
            }
        ])
        const newEngineer = new Engineer(
            answers.name,
            answers.id,
            answers.email,
            answers.github
        );
        newStaffMemberData.push(newEngineer);
    
     //If Intern is selected:
    } else if (answers.role === "Intern") {
        const internAns = await inquirer
        .prompt([
            {
                type:"input",
                message:"What university did you attend?",
                name:"university",
            },
        ])

        const newIntern = new Intern(
            answers.name,
            answers.id,
            answers.email,
            internAns.university
        );
        newStaffMemberData.push(newIntern);
    }

}; //End of question function.

async function promptQuestions() {
    await questions()
    

    const addMemberAns = await inquirer
        .prompt([
            {
                name:'addMember',
                type: 'list',
                choices: ['Add a new member', 'Create team'],
                message: "What would you like to do next?"
            }
        ])

    if (addMemberAns.addMember === 'Add a new member') {
        return promptQuestions()
    }
    return createTeam();
}  
  
  promptQuestions();
  
function createTeam () {
    console.log("new guy", newStaffMemberData)
    fs.writeFileSync(
        "./dist/index.html",
        generateTeam(newStaffMemberData),
        "utf-8"
    );
  }