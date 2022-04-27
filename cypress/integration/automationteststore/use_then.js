/// <reference types="Cypress" />

describe("Inspect Automation Test Store items using chain of commands",()=>{
 
it("Click on the item using item text",()=>{
    cy.visit('https://automationteststore.com/')
    cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click().then(function(itemHeaderText){
        console.log("Slected the Following item:"+ itemHeaderText.text())
    })
    
})
})