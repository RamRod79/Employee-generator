const Employee = require('../lib/Employee');


describe('Test Employee Class', () => {
    it('should create a new employee object', () => {
    const me = new Employee(1, 'armando@gmail.com', "Armando");

    expect(typeof me).toBe("object");
    })

    it('can set a name via constructor', () => {
        const me = new Employee(1, 'armando@gmail.com', "Armando");

        expect(me.name).toEqual("Armando");
    })

    it('can set a id via constructor', () => {
        const me = new Employee(1, 'armando@gmail.com', "Armando");

        expect(me.id).toEqual(1);
    })

    it('can set a email via constructor', () => {
        const me = new Employee(1, 'armando@gmail.com', "Armando");

        expect(me.email).toEqual("armando@gmail.com");
    })
    
    it('can get email via getEmail() method', () => {
        const me = new Employee(1, 'armando@gmail.com', "Armando");

        expect(me.getEmail()).toEqual("armando@gmail.com");
    })
    
    it('can get name via getName() method', () => {
        const me = new Employee(1, 'armando@gmail.com', "Armando");

        expect(me.getName()).toEqual("Armando");
    })
    
    it('can get id via getId() method', () => {
        const me = new Employee(1, 'armando@gmail.com', "Armando");

        expect(me.getId()).toEqual(1);
    })
       
    it('can get role via getRole() method', () => {
        const me = new Employee(1, 'armando@gmail.com', "Armando");

        expect(me.getRole()).toEqual("Employee");
    })

})