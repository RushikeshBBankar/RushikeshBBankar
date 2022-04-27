/// <reference types="Cypress" />

describe("handling Data via webdriveruniversity",()=>{
    beforeEach(() => {
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#data-table').invoke('removeAttr','target').click()
    })

    it("Calculate and assert the total age of all user ",()=>{
        var userdetails =[];
        var numb = 0;
        cy.get('#thumbnail-1 td').each(($el, index, $list)=>{
            userdetails[index] = $el.text();
        }).then(()=> {
            var i;
            for(i = 0 ; i < userdetails.length; i++)
            {
                if(Number(userdetails[i]))
                {
                    numb +=Number(userdetails[i])
                }
                //cy.log(userdetails[i])
            }
            cy.log("Total Number off age count" +numb)
            expect(numb).to.equal(322)
        })
       
    })

    it.only("Calculate assert the age of a given user bassed on last name",()=> {
        cy.get('#thumbnail-1 tr td:nth-child(2)').each(($el, index, $list) =>{

            const text = $el.text()
            if(text.includes("Woods")){//search wood in second coloume
                cy.get('#thumbnail-1 tr td:nth-child(2)').eq(index).next().then(function(age) {
                    //after the search Wood get the index number from the coloum save it in (.eq(index))
                    //jump in "next" coloum 
                    //"then" save that valu in function(age)

                    const userAge = age.text()
                    //save age in to new variable name userAge
                    expect(userAge).to.equal("80")
                    //Just assert the value in the tabel and expected value

                    
                })
            }
        })
    })

})