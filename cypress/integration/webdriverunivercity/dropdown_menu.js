/// <reference types="Cypress" />

describe("DropDown buttons ",()=>{

    it("validate the the drop down buton",()=>{
        cy.visit('https://webdriveruniversity.com/')
        
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click() 
        cy.get('#dropdowm-menu-1').select('python')
        cy.get('#dropdowm-menu-2').select('TestNG').should('have.value','testng')
        cy.get('#dropdowm-menu-3').select('CSS').contains('CSS')


    })
})