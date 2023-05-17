class HomePage {
    
    getButtonMenu(){
        return cy.xpath("//button[@id='dropdownMenu2']")
    }
    getButtonAdmin(){
        return cy.get('#adminConfig')
    }
    getButtonUtilisateur(){
        return cy.xpath('//a[@href="/admin/utilisateur"]')
    }  
    goToListUser(){
        return cy.xpath('//a[@href="/admin/userList"]')
    }
    getApprouverButton(){
        return cy.xpath('//tr[contains(.,"bastiendespisnowak@gmail.com")]//a[contains(.,"Approuver")]')
    }
    getButtonDeconnexion(){
        return cy.xpath('//button[@class="dropdown-item"]')
    }
    getChampsSaisiMotClées(){
        return cy.xpath('//input[@name="searchDescription"]')
    }
    clickOnButtonSearch(){
        return cy.xpath('//a[@role="button"]')
    }
    getResultSearch(){
        return cy.xpath('//section[@class="OC_list-product"]')
    }
}
export default HomePage
require('@cypress/xpath')