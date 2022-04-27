/// <reference types="Cypress" />

describe("Iterate over Element", () => {

    it("log information of all hair care product", () => {
        cy.visit('https://automationteststore.com/')
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click()
        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
            cy.log(" index "+ index + " : " + $el.text())

        });
    })
        it("Add A specific Product to basket", () => {
            cy.visit('https://automationteststore.com/')
            cy.get("a[href*='product/category&path=']").contains("Hair Care").click()

            cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
                if($el.text().includes('Curls to straight Shampoo')){
                    cy.wrap($el).click()    
                
              }
            })
    })    
})