/// <reference types="Cypress" />

describe("Validate Properties of the contact Us Page",()=>{
    
    it("Validate Prop. Of Contact Us",()=>{
        
        cy.visit('https://automationteststore.com/index.php?rt=content/contact')
        //Use cypress chainning and Command 
        cy.contains('#ContactUsFrm','Contact Us Form').find('#field_11').should('contain','First name')

        // Jquery Approch
        cy.contains('#ContactUsFrm','Contact Us Form').then(text => {
            const firstname = text.find('#field_11').text()
            expect(firstname).to.contain('First name')

            //Embedded Command
            cy.get('#field_11').then(futext => {
                cy.log(futext.text())
                cy.log(futext)
            })
        })

    }) 
   
})