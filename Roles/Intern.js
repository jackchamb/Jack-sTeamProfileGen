//create employee role follow up for (Intern)

const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email) {
        super(name, id, email);
        this.school = school;
        this.title = "Intern";
    }
    grabSchool(){
        return this.school;
    }
}
module.exports = Intern;
