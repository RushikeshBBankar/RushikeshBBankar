/// <reference types="Cypress" />

describe("Cypress web securities ",()=>{

    it("Visiting two diffrent domain",()=>{
       // two diffrent domain 
        cy.visit('https://webdriveruniversity.com/')

        cy.visit('https://automationteststore.com/')
    })

    it("Visiting two diffrent Domain by user action",()=>{
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#automation-test-store').invoke('removeAttr','target').click() 
    })
})