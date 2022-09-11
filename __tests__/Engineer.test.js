const Engineer = require('../lib/Engineer');


describe('Test Engineer Class', () => {
    it('should create a new Engineer object', () => {
    const me = new Engineer(2, 'herman@gmail.com', "Herman");

    expect(typeof me).toBe("object");
    })

    it('can set a name via constructor', () => {
        const me = new Engineer(2, 'herman@gmail.com', "Herman");

        expect(me.name).toEqual("Herman");
    })

    it('can set a id via constructor', () => {
        const me = new Engineer(2, 'herman@gmail.com', "Herman");

        expect(me.id).toEqual(2);
    })

    it('can set a email via constructor', () => {
        const me = new Engineer(2, 'herman@gmail.com', "Herman");

        expect(me.email).toEqual("herman@gmail.com");
    })
    
    it('can get email via getEmail() method', () => {
        const me = new Engineer(2, 'herman@gmail.com', "Herman");

        expect(me.getEmail()).toEqual("herman@gmail.com");
    })
    
    it('can get name via getName() method', () => {
        const me = new Engineer(2, 'herman@gmail.com', "Herman");

        expect(me.getName()).toEqual("Herman");
    })
    
    it('can get id via getId() method', () => {
        const me = new Engineer(2, 'herman@gmail.com', "Herman");

        expect(me.getId()).toEqual(2);
    })
       
    it('can get role via getRole() method', () => {
        const me = new Engineer(2, 'herman@gmail.com', "Herman");

        expect(me.getRole()).toEqual("Employee");
    })

})