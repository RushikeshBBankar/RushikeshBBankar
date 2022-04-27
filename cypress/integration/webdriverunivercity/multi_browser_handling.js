/// <reference types="Cypress" />

describe("Multi Browser Test",()=>{

    it("To check Multi Browser handling in Cypress",()=>{
        cy.visit('https://webdriveruniversity.com/')
        
        // removeAttr use to handel multi browser 
        cy.get('#contact-us').invoke('removeAttr','target').click() 
    })

    it("",() => {
        
    })
})