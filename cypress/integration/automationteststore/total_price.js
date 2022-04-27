/// <reference types="Cypress" />

describe("Iterate over Element", () => {
    it("Calculate total of normal and sale producrt", () => {
        cy.visit('https://automationteststore.com/')
        cy.get('.thumbnail').as('productThumbnail')

        cy.get('.thumbnail').find('.oneprice').invoke('text').as('itemprice')

        cy.get('.thumbnail').find('.oneprice').invoke('text').as('saleItemPrice')
        //Non sale item Price sale meance without offer
        var itemsTotal = 0;
        cy.get('@itemprice').then($linkText => {
            var itemspricetotal = 0;
            var itemprice = $linkText.split('$');
            var i;
            for (i = 0; i < itemprice.length; i++) {
                cy.log(itemprice[i])
                itemspricetotal += Number(itemprice[i])
            }
            itemsTotal += itemspricetotal;
            cy.log("non sale price item total :" + itemspricetotal)
        })
        // Sale Price Item Total(with offer)
        cy.get('@saleItemPrice').then($linkText => {
            var saleItemsprice = 0;
            var saleItemPrice = $linkText.split('$');
            var i;
            for (i = 0; i < saleItemPrice.length; i++) {
                cy.log(saleItemPrice[i])
              saleItemsprice += Number(saleItemPrice[i])
            }
            itemsTotal += saleItemsprice;
            cy.log("SaleItem  price item total :" + saleItemsprice)
            expect(itemsTotal).to.equal(491)
        })
    })
})