/// <reference types="Cypress" />
describe("Selector examples",()=>{
    it('Example of selectors via Webdriveruni contact us page',()=>{
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        //By input
        cy.get(['input'])
        //By atribute name and value
        cy.get('input[name="first_name"]')
        //By id
        cy.get('#contact_me')
        
        cy.get('textarea[name="message"]')
        //By two fiffrent attributes
        cy.get('[class="navbar navbar-inverse navbar-fixed-top"]')
        //By xpath
        cy.xpath('//input[@name="first_name"]').type('Tom')
    })
})