
describe('testing diffrent port',()=>{

    before(()=>{
        console.log('running ny test ')
    })
    beforeEach(()=>{
        cy.visit('https://www.google.com/')
    })

    it('Open In 500 and 800',()=>{

        cy.viewport(500,800)
    })
})