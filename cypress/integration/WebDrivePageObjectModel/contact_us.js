
import Contact_Us_PO from "../../support/pageObjectModel/webDrivUniPage/ContactPage_PO";
import HomePage_PO from "../../support/pageObjectModel/webDrivUniPage/Homepage_PO"

describe("WebDriveUni Page Object Model ",()=>{
  Cypress.config('defaultCommandTimeout', 20000)
    
    beforeEach(function() {
        const homepage_PO = new HomePage_PO();
        homepage_PO.visitHomepage();
        homepage_PO.clickOn_ContactUs_Button();
        })
    
        before(function(){
          cy.fixture('example').then(function(data){
             
              globalThis.data = data;
          })
      })

    it.only("Should be able to submit a succesful submition via  Dynamic url ",()=>{

      cy.title().should('include',"WebDriver | Contact Us")
      cy.url().should('include','contactus')      
      const contact_Us_PO = new Contact_Us_PO()
      contact_Us_PO.ContactForm_Submition(data.first_name, data.last_name, data.email, "This is My basic information", 'h1', 'Thank You for your Message!')
    }) 

})