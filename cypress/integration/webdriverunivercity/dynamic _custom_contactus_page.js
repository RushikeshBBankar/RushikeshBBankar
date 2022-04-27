/// <reference types="Cypress" />

describe("navigate to webDrivuni_contact us page using dynamic custom command ",()=>{
    
    
    //1st : creat a base url in "cypress.json"  like :-
    //{"baseUrl" :"https://webdriveruniversity.com/"}

    //2nd : crete a command in "command.js" like :-
    //line:-1 :Cypress.Commands.add("navigateTo_WebdriverUni_homepage",() =>{ 
    //line:-2 :cy.visit("/") 
    //line:-3 :})
    
    //3rd : creat custom command in beforeEach below 
    // just copy the comand name which is create in command.js file and pest it after "cy."
    beforeEach(function() {
        
        //cy.navigateTo_WebdriverUni_homepage() this is or perticular web site
        
        cy.navigateTo_WebdriverUni_Contact_Us_page()
        //its a custom command with global variable 
        //here we creat a dynamic command to navigate the contact us page the ligic is create in "cypress.json"
        //the line :- 20 is used insted of line :-24
        //cy.get('#contact-us').invoke('removeAttr','target').click()
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