/// <reference types="Cypress" />

describe("test Contact us from via WebdriverUni",()=>{

    it("Should be able to submit a succesful submition via contact us from",()=>{
        cy.visit("/")
        
        //cy.get('#contact-us > .thumbnail').click()  
        //Using Direct from path from the cypress runner (Open Selector Playuground)

        cy.get('#contact-us').click() 
        // Using the id contacy usand here we dont get the error like (time out retrying)by cy.click()
        //it its appear the use {force:true}
        //cy.get('#contact-us').click({force:true}) 

    })

    it("Should  not be able to submit a succesful submition via contact us from",()=>{
        
    })
})