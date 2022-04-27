/// <reference types="Cypress" />

describe("JSON Object",()=>{

    it("Json Object Example",()=>{
        const exampleObject ={"key": "Raj", "key2": "Rathod"}

        const exampleArraynOfValues =["Ran", "Rajat", "Rushi"]

        cy.log(exampleObject["key"])//Raj
        cy.log(exampleObject["key2"])//Rathod
        cy.log(exampleObject.key2)
       
        cy.log(exampleArraynOfValues[0])
        cy.log(exampleArraynOfValues[2])
    })

})