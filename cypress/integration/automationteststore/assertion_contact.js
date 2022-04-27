/// <reference types="Cypress" />

describe("test Contact us from via WebdriverUni",()=>{
    
    it("Should be able to submit a succesful submition via contact us from",()=>{
        cy.visit('https://automationteststore.com/')
        cy.get('.info_links_footer > :nth-child(5) > a').click()
        cy.get('#ContactUsFrm_first_name').type('Tom')
        cy.get('#ContactUsFrm_email').type('tomCruse@gmail.com')
        cy.get('#ContactUsFrm_email').should('have.attr','name','email')
        cy.get('#ContactUsFrm_enquiry').type("Can you provide a additional dicount on bulk order on you have any future offer on bulk purchess")
        cy.get('.col-md-6 > .btn').click()
        
        // assertions
        cy.get('.mb40 > :nth-child(3)').should('have.text','Your enquiry has been successfully sent to the store owner!')
    }) 
   
})