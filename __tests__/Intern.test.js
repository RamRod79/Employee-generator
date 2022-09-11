const Intern = require('../lib/Intern');


describe('Test Intern Class', () => {
    it('should create a new Intern object', () => {
    const me = new Intern(3, 'michael@gmail.com', "Michael");

    expect(typeof me).toBe("object");
    })

    it('can set a name via constructor', () => {
        const me = new Intern(3, 'michael@gmail.com', "Michael");

        expect(me.name).toEqual("Michael");
    })

    it('can set a id via constructor', () => {
        const me = new Intern(3, 'michael@gmail.com', "Michael");

        expect(me.id).toEqual(3);
    })

    it('can set a email via constructor', () => {
        const me = new Intern(3, 'michael@gmail.com', "Michael");

        expect(me.email).toEqual("michael@gmail.com");
    })
    
    it('can get email via getEmail() method', () => {
        const me = new Intern(3, 'michael@gmail.com', "Michael");

        expect(me.getEmail()).toEqual("michael@gmail.com");
    })
    
    it('can get name via getName() method', () => {
        const me = new Intern(3, 'michael@gmail.com', "Michael");

        expect(me.getName()).toEqual("Michael");
    })
    
    it('can get id via getId() method', () => {
        const me = new Intern(3, 'michael@gmail.com', "Michael");

        expect(me.getId()).toEqual(3);
    })
       
    it('can get role via getRole() method', () => {
        const me = new Intern(3, 'michael@gmail.com', "Michael");

        expect(me.getRole()).toEqual("Employee");
    })

})