/// <reference types="Cypress" />

describe("variable",()=>{


    
        it('alias demo ', function() {
            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('.section_header')
            .invoke('text').as('invokeText')
         cy.log(this.invokeText)
        })
        
        it('alias demo ', function() {
            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
           // cy.log(this.invokeText)
            cy.get('#contact_form .feedback-input').first().should('contain',this.invokeText)
            cy.wait(5000)
        })
       
    })
