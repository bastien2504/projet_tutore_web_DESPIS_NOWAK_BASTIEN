require('@cypress/xpath');
import InscriptionPage from '../pages/InscriptionPage';

const inscriptionPage=new InscriptionPage();

class InscriptionStep {
    verificationArriverFormulaire(){
        inscriptionPage.getValeurTitre().should('have.text',"Formulaire d'inscription");
    }
    setNewUser(data){
        inscriptionPage.selectTypeCompte().check(data.type)
        inscriptionPage.getNom().type(data.nom)
        inscriptionPage.getPrenom().type(data.prenom)
        inscriptionPage.getDateNaissance().type(data.dateNaissance)
        inscriptionPage.getAdresse().type(data.adresse)
        inscriptionPage.getPays().select(data.ville.pays.nom)
        inscriptionPage.getVille().select(data.ville.nom)
        inscriptionPage.getCodePostal().type(data.codePostal)
        inscriptionPage.getPasseport().type(data.passport)
        inscriptionPage.getCarteIdentite().type(data.cin)
        inscriptionPage.getUsername().type(data.username)
        inscriptionPage.getTelephone().type(data.tel)
        inscriptionPage.getPassword().type(data.password)
        inscriptionPage.getConfirmPassword().type(data.confirmPassword)

    }
}
export default InscriptionStep