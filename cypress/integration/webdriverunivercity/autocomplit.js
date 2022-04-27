/// <reference types="Cypress" />

describe("Autocomplite DropDown lists buttons ",()=>{

    it("Select Specific product via Autocomplit the the drop down buton",()=>{
        cy.visit('https://webdriveruniversity.com/')
        
        cy.get('#autocomplete-textfield').invoke('removeAttr','target').click() 

        cy.get('#myInput').type('A')

        cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => {

            const prod = $el.text();
            const prodToSelect = 'Avacado';

            if(prod === prodToSelect){

                $el.click()
                cy.get('#submit-button').click()
                cy.url().should('include','Avacado')

            }
        })
       

    })
    it("Select Specific product via Autocomplit the the drop down buton",()=>{
        cy.visit('https://webdriveruniversity.com/')
        
        cy.get('#autocomplete-textfield').invoke('removeAttr','target').click() 

        cy.get('#myInput').type('F')

        cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => {

            const prod = $el.text();
            const prodToSelect = 'Fondu';

            if(prod === prodToSelect){

                //$el.click()
                // click is deprecated then use jQuery key
                $el.trigger('click')
                cy.get('#submit-button').click()
                cy.url().should('include','Fondu')

            }
        }).then(()=>{
            cy.get('#myInput').type('D')

        cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => {

            const prod = $el.text();
            const prodToSelect = 'Duck';

            if(prod === prodToSelect){

                $el.trigger('click')
                //$el.click()
                cy.get('#submit-button').click()
                cy.url().should('include','Duck')

            }
        })
            
        })
       

    })
})