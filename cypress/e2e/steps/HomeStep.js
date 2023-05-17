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
    
}
export default HomeStep