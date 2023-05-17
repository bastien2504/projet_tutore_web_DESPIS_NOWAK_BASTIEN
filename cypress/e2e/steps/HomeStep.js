require('@cypress/xpath');
import HomePage from '../pages/HomePage';

const homePage=new HomePage();

class HomeStep {
    verifierNomPrenom(data){
        homePage.getButtonMenu().should('have.text'," Bienvenue "+data.nom +" "+data.prenom+" ")
    }
    goToAdminConfig(){
        homePage.getButtonAdmin().click()
    }
    goToListUtilisateur(){
        homePage.getButtonUtilisateur().click()
        homePage.goToListUser().click()
    }
    approuverUser(data){
        cy.xpath('//tr[contains(.,"'+data.username+'")]//a[contains(.,"Approuver")]').click()
    }
    verifierApprouver(data){
        cy.xpath('//tr[contains(.,"'+data.username+'")]//a[contains(.,"Bloquer")]').should('have.text','Bloquer')
    }
    deconnexionCompte(){
        homePage.getButtonMenu().click()
        homePage.getButtonDeconnexion().click()
    }
    recherParMotClées(motCles){
        homePage.getChampsSaisiMotClées().type(motCles)
        homePage.clickOnButtonSearch().click()
    }
    verifierPresenceMotCles(motCles){
        homePage.getResultSearch().scrollIntoView()
        homePage.getResultSearch().should('contain',motCles)
    }
    verifierNonPresenceMotCles(motCles){
        homePage.getResultSearch().scrollIntoView()
        homePage.getResultSearch().should('not.contain',motCles)
    }
    
}
export default HomeStep