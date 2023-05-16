require('@cypress/xpath');
import HomePage from '../pages/HomePage';

const homePage=new HomePage();

class HomeStep {
    verifierNomPrenom(data){
        homePage.getButtonMenu().should('have.text'," Bienvenue "+data.nom +" "+data.prenom+" ")
    }
    
}
export default HomeStep