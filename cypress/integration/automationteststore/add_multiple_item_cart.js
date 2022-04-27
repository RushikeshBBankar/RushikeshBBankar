/// <reference types="Cypress" />

describe("Add Multiple Item in a basket", () => {

    before(function () {
        cy.fixture("product").then(function (data) {
            globalThis.data = data;

        })
    })
    
    beforeEach(function () {
        //cy.visit("https://automationteststore.com/")
        cy.visit('https://automationteststore.com/index.php?rt=product/category&path=52')
        //cy.get("a[href*='product/category&path=']").contains("Hair Care").click()
    })

    it("Add a specific item in basket", () => {
        
        globalThis.data.productName.forEach(function(element) {
            cy.addProductToBasket(element)
        })
    })
        
    });
    

          