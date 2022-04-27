/// <reference types="Cypress" />

describe("Southwest ",()=>{   
    it('Adult + Childern ', function() {
        let Adult
        let childern
        let TotalAge =0;

        cy.visit('https://www.southwest.com/')
        cy.get('.transition-content .swa-icon_vacations').click({force: true})
        cy.get('.flyout-trigger.number-selector').first().click({force: true})
        cy.get('.number-selector--content').find('.swa-icon_plus-circle').click()
        cy.get('.number-selector--content').find('.number-selector--content-value')
        .then($ageA => {
             Adult = $ageA.text()
            cy.log(Adult)
        })

        cy.get('.flyout-trigger.number-selector').last().click()
        cy.get('.number-selector--content').find('.swa-icon_plus-circle').click()
        cy.get('.number-selector--content').find('.number-selector--content-value')
        .then($ageC => {
         childern = $ageC.text()
            cy.log(childern)
        })
       TotalAge += Adult
        cy.log(TotalAge)
        
    })
})
