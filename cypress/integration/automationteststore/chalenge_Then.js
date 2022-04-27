/// <reference types="Cypress" />

describe("test Contact us from via WebdriverUni",()=>{
    
    it("Should be able to submit a succesful submition via contact us from",()=>{
        cy.visit('https://automationteststore.com/')
        cy.get('.info_links_footer > :nth-child(5) > a').click().then(function(linkText){
            console.log("Click on contact link  " + linkText.text())
        })
    
    }) 
   
})