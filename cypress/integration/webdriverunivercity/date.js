/// <reference types="Cypress" />

describe("Test date Picker via webdriveruni",()=>{

    beforeEach(() => {
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#datepicker').invoke('removeAttr','target').click()
    })

    it("Tet Data from the date picker",()=>{
        let date = new Date();
        // get the current date 
        date.setDate(date.getDate())
        cy.log(date.getDate())

        //get the current date i.e : 22+5=27
        let date1 = new Date();
        date1.setDate(date.getDate() + 5)
        cy.log(date1.getDate())
      
    })

    it("Tet Data from the date picker",()=>{
        var date = new Date();
        // get the future date month and year

        cy.get('#datepicker').click()

        date.setDate(date.getDate() + 475)
        
        var futureYear = date.getFullYear();
        var futureMonth = date.toLocaleString("default",{month:"long"});
        var futureDay  = date.getDate()

        cy.log("Future year to select" +futureYear)
        cy.log("Future month to select" +futureMonth)
        cy.log("Future day to select " +futureDay)

        function selectMonthAndYear(){
            cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate =>{
    
                if(!currentDate.text().includes(futureYear)){
                    cy.get('.next').first().click();
                    selectMonthAndYear();
                }
            }).then(() => {

                cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate =>{
    
                    if(!currentDate.text().includes(futureMonth)){
                        cy.get('.next').first().click();
                        selectMonthAndYear();
                    }
                })  
            })

            }
            function selectFutureDay(){
                cy.get('[class="day"]').contains(futureDay).click()
            }

      selectMonthAndYear();
      selectFutureDay();
    })
    
})