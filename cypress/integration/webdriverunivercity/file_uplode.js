/// <reference types="Cypress" />

describe("Test file uplode Via webdriveruni",()=>{
    beforeEach(() => {
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#file-upload').invoke('removeAttr','target').click()
    })

    it("Uplode File  .........",() => {
        cy.fixture("ok.jpg","base64").then(fileContent =>{
            cy.get('#myFile').attachFile(
                {
                    fileContent,
                    fileName: "ok.jpg",
                    mimeType: "image/jpg"
                },
                {
                    uploadType : "input"
                }
            )
        })
        cy.get('#submit-button').click()
    });

    
    it("Uplode  no File  .........",() => {
       
        cy.get('#submit-button').click()
    });
})