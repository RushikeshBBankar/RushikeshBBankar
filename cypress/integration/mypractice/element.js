describe('check Element get concept',()=>{

    it('Element get testing',()=>{
        cy.visit('https://webdriveruniversity.com/')
        cy.get('div.thumbnail h1').should('be.visible')
        
    })
})