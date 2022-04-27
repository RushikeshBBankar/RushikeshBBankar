///<reference types="cypress" />
describe("Add Multiple items to basket", () =>{

    before(function () {
        cy.fixture("products").then(function(data){
            globalThis.data = data;
        });
    });

    beforeEach(function(){
        cy.visit("https://automationteststore.com/")
        cy.get('nav.subnav >*').contains('Hair Care').click();
    });

    it("Add specific item to basket ", () => {
        globalThis.data.productName.forEach(function(element){
            cy.addProductToBasket(element)
        })
    })
});
