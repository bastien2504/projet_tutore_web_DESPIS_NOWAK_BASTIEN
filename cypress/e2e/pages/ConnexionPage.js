class ConnexionPage {
    getUserName(){
        return cy.xpath("//input[@formcontrolname='username']")
    }
    getPassword(){
        return cy.xpath("//input[@formcontrolname='password']")
    }
    getButtonLogin(){
        return cy.xpath("//button[contains(.,'Connexion')]")
    }
}
export default ConnexionPage
require('@cypress/xpath')