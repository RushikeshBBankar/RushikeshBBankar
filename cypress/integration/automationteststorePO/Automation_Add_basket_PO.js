
/// <reference types="Cypress" />

import Autostore_HairCare_PO from "../../support/pageObjectModel/automation_test_Page/AutoStore_HairCare_PO";
import Autostore_PO from "../../support/pageObjectModel/automation_test_Page/AutoStore_Homepage_PO";


describe("Add Multiple Item in a basket", () => {

    const autostore_PO =new Autostore_PO
    const haircare_PO = new Autostore_HairCare_PO
     before(function () {
        cy.fixture("product").then(function (data) {
            globalThis.data = data;

        })
    })
    
    beforeEach(function () {
        autostore_PO.accessHomepage();
        autostore_PO.clickOn_HairCare_Link();
    })

    it("Add a specific item in basket", () => {

    haircare_PO.addHairCareProductToBasket();
       
    })
        
    });
    

          