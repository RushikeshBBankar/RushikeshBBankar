/// <reference types="Cypress" />

describe("Inspect Automation Test Store items using chain of commands",()=>{
    
    it("Click on the item using item header",()=>{
        cy.visit('https://automationteststore.com/')
        
        //This following will fail
        //const makeuplinkk = cy.get("a[href*='product/category&path=']").contains("Makeup")
        //const skincarelinkk = cy.get("a[href*='product/category&path=']").contains("Skincare")
        //makeuplinkk.click()
       // skincarelinkk.click()
        
        //This following will pass
        const makeuplink = cy.get("a[href*='product/category&path=']").contains("Makeup")
        makeuplink.click()

        const skincarelink = cy.get("a[href*='product/category&path=']").contains("Skincare")
        skincarelink.click()
})
it("Click on the item using item header",()=>{
    
    cy.visit('https://automationteststore.com/')
    
    cy.get("a[href*='product/category&path=']").contains("Makeup").click()
    
    // const header = cy.get("h1 .maintext")
    // cy.log(header.text())

    cy.get("h1 .maintext").then(($headerText) => {
        const headerText = $headerText.text()
        cy.log("found header text : " + headerText)
        expect(headerText).is.eq('Makeup')
    })
})
})