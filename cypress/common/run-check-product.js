export function product(){
    it("Add A  cyrls specific Product to basket", () => {
        cy.selectProduct('Curls to straight Shampoo')
    })

    it("Add A seaweed specific Product to basket", () => {
        cy.selectProduct('Seaweed Conditioner')
    })

    it("Add A eau specific Product to basket", () => {
        cy.selectProduct('Eau Parfumee au The Vert Shampoo')
    })
}