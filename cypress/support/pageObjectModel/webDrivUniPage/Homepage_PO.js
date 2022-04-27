
// home page Object creat 
class HomePage_PO{
    //custom command creat for home page url

    visitHomepage(){
        cy.visit(Cypress.env("WebdriverUni_homepage"))
        //Here use envirment variable creat in cypress.json file :- "WebdriverUni_homepage"
        // cy.visit(Cypress.env("WebdriverUni_homepage") ,{timeout : 60000})
        // here the time out setting is 60000ms,this sating can affect only to load a home page during the execution.
        //{timeout:6000}:-this code can affect only this page not globaly.
    }
    clickOn_ContactUs_Button() {
        cy.get('#contact-us').invoke('removeAttr','target').click(),{timout : 60000}
    }
}
export default HomePage_PO;