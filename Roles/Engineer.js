//create employee role follow up for (Engineer)

const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
        this.title = "Engineer";
    }
    grabGitHub(){
        return this.github;
    }
}

module.exports = Engineer;