require('@cypress/xpath');
import ConnexionPage from '../pages/ConnexionPage';

const connexionPage=new ConnexionPage();

class ConnexionStep {
    setLogin(username, password) {
        cy.log(username)
        connexionPage.getUserName().type(username)
        connexionPage.getPassword().type(password)
        connexionPage.getButtonLogin().click()
    }
    checkError(message) {
        connexionPage.getError().should('have.text',message)
    }
    clickNewUser(){
        connexionPage.getButtonInscription().click()
    }
    checkOnLoginPage(message){
        connexionPage.checkText().should('have.text',message)
    }
}
export default ConnexionStep