
// Contact Us page Object creat 
class Contact_Us_PO {
    ContactForm_Submition(firstName, lastName, email, comment, $selector, textLocator) {

        cy.get('[name="first_name"]').type(firstName)
        cy.get('[name="last_name"]').type(lastName)
        cy.get('[name="email"]').type(email)
        cy.get('textarea.feedback-input').type(comment)
        cy.get('[type="submit"]').click()
        cy.get($selector).contains(textLocator),{timeout : 60000}
        // this time out setting is for perticular this step.

    }
}
export default Contact_Us_PO;