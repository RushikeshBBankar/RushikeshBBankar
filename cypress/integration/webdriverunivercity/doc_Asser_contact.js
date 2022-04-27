/// <reference types="Cypress" />

describe("test Contact us from via WebdriverUni",()=>{

    it("Should be able to submit a succesful submition via contact us from",()=>{
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        //Validate the document property
        cy.document().should('have.property','charset').and('eq','UTF-8')

        //validate the Page title
        cy.title().should('include','WebDriver | Contact Us')
        
        //Perform Assertion Against the Url
        cy.url().should('include','contactus')
       
    })
})
