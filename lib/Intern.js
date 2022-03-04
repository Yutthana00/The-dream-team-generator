const Employee = requirer("Employee");

class Intern extends Employee {
    constructor(name, id, email, university){
        super(name, id, email)
        this.university = university
    }
    getRole(){
        return 'Intern'
    }
    getUniversity (){
        return this.university
    }
}

module.exports = Intern;