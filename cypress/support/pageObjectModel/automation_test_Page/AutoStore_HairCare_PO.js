class Autostore_HairCare_PO {
    addHairCareProductToBasket(){
        globalThis.data.productName.forEach(function(element) {
            cy.addProductToBasket(element)
        })

    }
}
export default Autostore_HairCare_PO
