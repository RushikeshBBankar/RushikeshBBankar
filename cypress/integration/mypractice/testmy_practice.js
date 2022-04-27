/// <reference types="Cypress" />

describe("Flipkart", () => {

      
    it("Open First product and Verify Title",() => {

        cy.visit('https://www.flipkart.com')
        cy.get('._3704LK').type('Fridge')
        cy.get('.L0Z3Pu').click()
        
        cy.get('._2iDkf8.t0pPfW').find('._24_Dny').first().click()// samsung click
        cy.wait(5000)
        cy.get('a._1fQZEK').first().invoke('removeAttr','target').find('._4rR01T').click()
        cy.title().should('include','SAMSUNG 198 L Direct Cool Single Door')
    


    })

    // it('Stackoverflow ',() => {

    //     cy.visit('https://stackoverflow.com')
    // })
})

    