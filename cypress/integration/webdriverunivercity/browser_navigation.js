/// <reference types="Cypress" />

describe("Navigate links to the correct link",()=>{

    it("Confirm link redirect to the correct pages",()=>{

        cy.visit('https://webdriveruniversity.com/')
        //home page
        cy.get('#contact-us').invoke('removeAttr','target').click()
        //click on contact
        cy.url().should('include','contactus') 
        //Conform the correct url with the help of url containing correct text
        cy.go('back')
        cy.url().should('include','https://webdriveruniversity.com/')
        cy.go('forward')
        cy.url().should('include','contactus')
        cy.go("back")
        cy.get('#page-object-model').invoke('removeAttr','target').click()
        cy.url().should('include','Page-Object-Model')
        cy.go('back')


    })

})