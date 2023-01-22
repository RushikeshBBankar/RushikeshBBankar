describe('check Element get concept',()=>{

    it('Element get testing',()=>{
        cy.visit('https://www.freshworks.com/')

        cy.get('ul.footer-nav li').find("a[href*='footer']").should('be.visible' ).and('')
       
    })
})