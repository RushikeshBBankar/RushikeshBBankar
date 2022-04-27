/// <reference types="Cypress" />

describe("test Contact us from via WebdriverUni",()=>{
    //pass Test with all cridential
    it("Should be able to submit a succesful submition via contact us from",()=>{
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type('Tom ')
        cy.get('[name="last_name"]').type('Cruse')
        cy.get('[name="email"]').type('tomcruse@gmail.com')
        cy.get('textarea.feedback-input').type('This is My basic information ')
        cy.get('[type="submit"]').click()
      //geting Succesful submition message
    }) 
    //failed test case with one mising Cridential Is Email add(Mising or Don't Entered)

    //Here "only" key command is use 
    //it.only("Should  not be able to submit a succesful submition via contact us from",()=>{

        it("Should  not be able to submit a succesful submition via contact us from",()=>{
            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type('Tom ')
        cy.get('[name="last_name"]').type('Cruse')
        cy.get('textarea.feedback-input').type('This is My basic information ')
        cy.get('[type="submit"]').click()
        //getting Succesful Error message all filed Required and Email add mising
    })
})