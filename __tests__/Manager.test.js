const Manager = require('../lib/Manager');


describe('Test Manager Class', () => {
    it('should create a new Manager object', () => {
    const me = new Manager(4, 'carlos@gmail.com', "Carlos");

    expect(typeof me).toBe("object");
    })

    it('can set a name via constructor', () => {
        const me = new Manager(4, 'carlos@gmail.com', "Carlos");

        expect(me.name).toEqual("Carlos");
    })

    it('can set a id via constructor', () => {
        const me = new Manager(4, 'carlos@gmail.com', "Carlos");

        expect(me.id).toEqual(4);
    })

    it('can set a email via constructor', () => {
        const me = new Manager(4, 'carlos@gmail.com', "Carlos");

        expect(me.email).toEqual("carlos@gmail.com");
    })
    
    it('can get email via getEmail() method', () => {
        const me = new Manager(4, 'carlos@gmail.com', "Carlos");

        expect(me.getEmail()).toEqual("carlos@gmail.com");
    })
    
    it('can get name via getName() method', () => {
        const me = new Manager(4, 'carlos@gmail.com', "Carlos");

        expect(me.getName()).toEqual("Carlos");
    })
    
    it('can get id via getId() method', () => {
        const me = new Manager(4, 'carlos@gmail.com', "Carlos");

        expect(me.getId()).toEqual(4);
    })
       
    it('can get role via getRole() method', () => {
        const me = new Manager(4, 'carlos@gmail.com', "Carlos");

        expect(me.getRole()).toEqual("Employee");
    })

})