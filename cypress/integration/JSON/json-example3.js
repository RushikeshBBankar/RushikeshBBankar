/// <reference types="Cypress" />

describe("JSON Object",()=>{

    it("Json Object Example",()=>{
     
        const exampleArryaOfObject =[
            {
                "key":"jitu"
            },
            {
                "key1":"Ruturaj"
            },
            {
                "key3":"Harsha"
            }
        ]       

        cy.log(exampleArryaOfObject[0].key)
        cy.log(exampleArryaOfObject[1].key1)
        cy.log(exampleArryaOfObject[2].key3)
        
    })

})