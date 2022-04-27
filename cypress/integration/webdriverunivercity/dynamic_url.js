/// <reference types="Cypress" />

describe("Test Dynamic And custom command for url",()=>{
    
    beforeEach(function() {

        
        cy.visit(Cypress.env("WebdriverUni_homepage")+'/Contact-Us/contactus.html') 
        // dynamic url
        //here we creat a env veriable in cypress.json file and give thet env name ensted of main url 
        //and extending url use with "+" sing.
        })
    

    it.only("Should be able to submit a succesful submition via  Dynamic url ",()=>{

       // cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type('Tom ')
        cy.get('[name="last_name"]').type('Cruse')
        cy.get('[name="email"]').type('tomcruse@gmail.com')
        cy.get('textarea.feedback-input').type('This is My basic information ')
        cy.get('[type="submit"]').click()
        cy.get('h1').should('have.text','Thank You for your Message!')
      //geting Succesful submition message
    }) 

})