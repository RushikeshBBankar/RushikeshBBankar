/// <reference types="Cypress" />

describe("test Contact us from via WebdriverUni",()=>{
    //pass Test with all cridential
    it.only("Should be able to submit a succesful submition via contact us from",()=>{
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type('Tom ')
        cy.get('[name="last_name"]').type('Cruse')
        cy.get('[name="email"]').type('tomcruse@gmail.com')
        cy.get('textarea.feedback-input').type('This is My basic information ')
        cy.get('[type="submit"]').click()
        cy.get('h1').should('have.text','Thank You for your Message!')
      //geting Succesful submition message
    }) 
    it("Should  not be able to submit a succesful submition via contact us from",()=>{
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type('Tom ')
        cy.get('[name="last_name"]').type('Cruse')
        cy.get('textarea.feedback-input').type('This is My basic information ')
        cy.get('[type="submit"]').click()
        cy.get('body').contains('Error: all fields are required')//pass corect message
        cy.get('body').contains('Error: all fields are required2')//pass incorect message
    
        //getting Succesful Error message all filed Required and Email add mising
    })
})