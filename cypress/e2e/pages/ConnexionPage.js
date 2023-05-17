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
    checkText(){
        return cy.xpath('//label[@for="username"]')
    }
}
export default ConnexionPage
require('@cypress/xpath')