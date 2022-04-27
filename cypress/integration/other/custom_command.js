/// <reference types="Cypress" />

describe("Iterate over Element", () => {

    beforeEach(() => {
        cy.visit('https://automationteststore.com/')
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click()

    })

    it("Add A  cyrls specific Product to basket", () => {
        cy.selectProduct('Curls to straight Shampoo')
    })
    it("Add A seaweed specific Product to basket", () => {
        
        cy.selectProduct('Seaweed Conditioner')
    })
    it("Add A eau specific Product to basket", () => {
        
        cy.selectProduct('Eau Parfumee au The Vert Shampoo')
    })

})