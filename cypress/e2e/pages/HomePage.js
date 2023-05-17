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
}
export default HomePage
require('@cypress/xpath')