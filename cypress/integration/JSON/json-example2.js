/// <reference types="Cypress" />

describe("JSON Object", () => {

    it("Json Object Example", () => {

        const users = {
            "FirstName": "Roshit",
            "LastName": "Sharma",
            "Age": "30",
            // Student is a array
            "Student": [
                //array index 0
                {
                    "FirstName": "Aishwarya",
                    "LastName": "Kalamb",
                },
                //array index 1
                {
                    "FirstName": "Mandakini",
                    "LastName": "Londhe",
                }
            ]
        }
        cy.log(users.LastName)
        cy.log(users.FirstName)
        cy.log(users.Age)
        cy.log(users.Student[0].FirstName)
        cy.log(users.Student[0].LastName)
        cy.log(users.Student[1].FirstName)
        cy.log(users.Student[1].LastName)
    })

})