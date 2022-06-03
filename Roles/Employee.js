// Build a Class for Employee role

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.email = email;
        this.id = id;
        this.title = 'Employee';
    }
    grabName() {
        return this.name;
    }
    grabEmail() {
        return this.email;
    }
    grabId() {
        return this.id;
    }
    grabTitle() {
        return this.title;
    }
}
module.exports = Employee;