const inquirer = require('inquirer');
const fs = require('fs');
const html = require("./htmltemp");
const util = require("util");
const validator = require("email-validator");

const writeFileAsync = util.promisify(fs.writeFile);
const appendFileAsync = utilpromisify(fs.appendfile);

let teamString = ``;
let teamPath = [];

async function foward() {
    try {
        await prompt()

        for (let i = 0; i < teamPath.length; i++) {
            teamString = teamString + html.generateCard(teamPath[i]);
        }

        let lastHtml = html.generateCard(teamString)

        console.log("Creating index.html file");

        writeFileAsync("./index.html", lastHtml);

        console.log("Created index.html");

    } catch (err) {
        return console.log(err);
    }
}

async function prompt() {
    let followUp = "";

    do{
        try {
            console.log("______________");
            let firstResponse = await inquirer.prompt([
                {
                    type: "input",
                    name: "name",
                    message: "what is your employee's name?",
                    validate: function validateName(name) {
                        return name !== "";
                    }
                },
                {
                    type: "input",
                    name: "ID",
                    message: "Please enter your employee's ID number",
                    validate: function validateName(name) {
                        return name !== "";
                    }
                },
                {
                    type: "input",
                    name: "email",
                    message: "Please Enter your employee's email address",
                    validate: function validateName(name) {
                        return validator.validate(name);
                    }
                },
                {
                    type: "list",
                    name: "job",
                    message: "What responsibility does your employee have?",
                    choices: [
                        "Manager",
                        "Engineer",
                        "Intern",
                    ]
                }
            ]);

            let secondResponse = ""

            if (response.role === "Manager") {
                secondResponse = await inquirer.prompt([{
                    type: "input",
                    name: "x",
                    message: "What is your managers office number?",
                    validate: function validateName(name){
                        return name !=="";
                    },
                }, ]);

                const Manager = new Manager(response.name, response.id, response.email, secondResponse.x);
                teamPath.push(Manager);

            } else if (response.role === "engineer") {
                secondResponse = await inquirer.prompt([{
                    type: "input",
                    name: "x",
                    message: "What is your employee's GitHub username?",
                    validate: function validateName(name){
                        return name !== "";
                    },
                }, ]);
                const engineer = new Engineer(response.name, response.id, response.email, secondResponse);
                teamPath.push(engineer);

            } else if (response.role == "intern") {
                secondResponse = await inquirer.prompt([{
                    type: "input",
                    name: "x",
                    message: "What university is your intern attending?",
                    validate: function validateName(name){
                        return name !== "";
                    },
                }, ]);

                const intern = new intern(response.name, response.id, response.email, secondResponse);
                teamPath.push(intern);
            }
        } catch (err) {
            return console.log(err);
        }
        responseFin = await inquirer.prompt([{
            type: "list",
            name: "finish",
            message: " Do you wish to continue?",
            choices: [
                "yes",
                "no",
            ]
        }, ]);
    } while (responseFin.finish === "yes");
}