const Employee = require("./Employee");

// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
class Engineer extends Employee{
    constructor(name, id, email, github ){
        super(name, id, email);
        this.github = github;
    }

    getName() {
        return this.name
    }

    getId(){
        return this.id
    }

    getEmail(){
        return this.email
    }
    getGitub(){
        return this.github
    }
    getRole(){
        return "Enginner"
    }
}

module.exports = Engineer;