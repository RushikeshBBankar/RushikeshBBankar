/// <reference types="Cypress" />

describe("Test Dynamic And custom command for url using dynamic command",()=>{
    
    
    //1st : creat a base url in "cypress.json"  like :-
    //{"baseUrl" :"https://webdriveruniversity.com/"}

    //2nd : crete a command in "command.js" like :-
    //line:-1 :Cypress.Commands.add("navigateTo_WebdriverUni_homepage",() =>{ 
    //line:-2 :cy.visit("/") 
    //line:-3 :})
    
    //3rd : creat custom command in beforeEach below 
    // just copy the comand name which is create in command.js file and pest it after "cy."
    beforeEach(function() {
        cy.navigateTo_WebdriverUni_homepage()

        cy.get('#contact-us').invoke('removeAttr','target').click()
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