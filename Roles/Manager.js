//create employee role follow up for (Manager)
const { off } = require("process");
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.title = "Manager";
        this.officeNumber = officeNumber;
    }
    grabofficeNumber(){
        return this.officeNumber;
    }
}

module.exports = Manager;
