const Employee = require('./Employee');
class Manager extends Employee {
    constructor(id, email, name, officeNumber) {
        super(id, email);
        this.officeNumber = officeNumber;
        }   
    }
    
    module.exports = Manager;