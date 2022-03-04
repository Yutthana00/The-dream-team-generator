const Employee = requirer("./Employee");

class Engineer extends Employee {
    constructor (name, id, github) {
        super(name,id,email)
        this.github = github
    }
    getRole(){
        return 'Engineer'
    }
    getGithub(){
        return this.github
    }
}

module.exports = Engineer;
