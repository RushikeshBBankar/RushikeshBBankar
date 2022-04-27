class Autostore_PO 
{
    //To call home page url Method 
    accessHomepage()
    {
        cy.visit("https://automationteststore.com/")
    }

    //To click on hairCare link
    clickOn_HairCare_Link()
    {
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click()
    }
    
    //On automation test store there is a lots off link 
    //Such as Account,MEN,BOOKS, CART,FRAGRANCE etc
    //for each we need to creat a method with there locator and clck
    
    clckOn_Men_Link()
    {
        //locator of men link and click
    }
    clickOn_Makeup_Link()
    {
        //Locator of mackup link
    }

}
export default Autostore_PO;