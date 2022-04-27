/// <reference types="Cypress" />

describe("test Contact us from via WebdriverUni",()=>{

    before(function(){
        cy.fixture("userDetails").as("user")
    })

    //pass Test with all cridential
    it("Should be able to submit a succesful submition via contact us from",()=>{
    
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        
        cy.get('@user').then((user) => {
            cy.get('[name="first_name"]').type(user.first_name)
            cy.get('[name="email"]').type(user.email)

        })
        cy.get('[name="last_name"]').type('bankar') 
        cy.get('textarea.feedback-input').type('This is My basic information ')
        cy.get('[type="submit"]').click()
        cy.get('h1').should('have.text','Thank You for your Message!')
      
    }) 
   
})