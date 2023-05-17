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
        if(data.type == '1'){
            inscriptionPage.getNomConjoint().type(data.nomConjoint)
            inscriptionPage.getPrenomConjoint().type(data.prenomConjoint)
            inscriptionPage.getDateNaissanceConjoint().type(data.dateNaissanceConjoint)
            inscriptionPage.getButtonValidation().click()

        } else if (data.type =='0') {
            inscriptionPage.getRaisonSociale().select(data.raisonSociale)
            inscriptionPage.getSiret().type(data.siret)
            inscriptionPage.getNombreSalarie().select(data.nombreSalarie) 
            inscriptionPage.getButtonValidation().click()
        }      
    }
}
export default InscriptionStep