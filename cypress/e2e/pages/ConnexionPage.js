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
    getError(){
        return cy.xpath("//div[@id='toast-container']")
    }
    getButtonInscription(){
        return cy.xpath("//a[@href='/register']")
    }
}
export default ConnexionPage
require('@cypress/xpath')