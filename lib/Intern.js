const Employee = require('./Employee');
class Intern extends Employee {
    constructor(id, email, name, school) {
        super(id, email);
        this.school = school;
        }   
    }
    
    module.exports = Intern;