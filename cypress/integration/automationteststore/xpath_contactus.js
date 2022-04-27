/// <reference types="Cypress" />

describe("test Contact us from via WebdriverUni",()=>{
    
    it("Should be able to submit a succesful submition via contact us from",()=>{
        cy.visit('https://automationteststore.com/')
       // cy.get('.info_links_footer > :nth-child(5) > a').click()
    
        ////*[@id="footer"]/footer/section[2]/div/div[1]/div/ul/li[5]/a
        cy.get('div .info').contains('Contact Us').click()
        //cy.xpath("a[contains(@href,'contact')]").last().click()
        cy.get('#ContactUsFrm_first_name').type('Tom')
        cy.get('#ContactUsFrm_email').type('tomCruse@gmail.com')
        cy.get('#ContactUsFrm_enquiry').type("Can you provide a additional dicount on bulk order on you have any future offer on bulk purchess")
        cy.get("button[title='Submit']").click()//xpath of submit button
        //cy.get('.col-md-6 > .btn').click()
    }) 
   
})